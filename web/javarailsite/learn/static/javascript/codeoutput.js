
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');

function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});

var codeMirror;
var app;

function onLoad(){
    
    codeMirror = CodeMirror.fromTextArea(document.getElementById("codearea"), {
    lineNumbers: true,
    matchBrackets: true,
    mode: "text/x-java"
  });
  
    Vue.component('output-panel', {
      
      props: [ "className", "content" ],
      
      template: '<div :class="className"> {{ content }} </div>'
      
    })
    
   app = new Vue({
	  delimiters: ['[[', ']]'],
	  el: '#codeoutput',
      data:{
          outputs: []
      }
	});
    
}

function runCodeFunction() {
		
	var codeArea = codeMirror.getValue();
	codeArea = window.btoa(codeArea);
	
	var result = sendPost(codeArea);
}

function getChallengeID(){
	return $("#challengeID").html();
}

function setProgress(progress){
	$("#codeProgress").html(function(){
		return progress;
	});
}

function sendPost(code) {
	
	setProgress('<progress class="progress is-small is-info" max="25"></progress>');
	
	var challengeID = getChallengeID();
	var jsonData = '{ \"challenge_id\": \"' + challengeID  + '\", \"code\": \"' + code + '\" }';
	
    $.ajax({
        type: "POST",
        url: '/learn/runJavaCode',
		dataType: 'json',
        data: jsonData,
        success: response
    });

}

function response(msg, status, jqXHR) {
    
    var text = "";
    var status = msg["status"];
    var statusClass = getStatus(status);
    
    if(status == "SUCCESS"){
        text = msg["text"];
    }else{
        text = msg["error"]
    }
    
	
	app.$data.outputs.push( { content: text, className: statusClass } );
	
	setProgress('');
}

function getStatus(status){
    
    if(status == "SUCCESS"){
        return "notification is-info";
    }
    
    return "notification is-danger";
}

$(document).ready(function(){
		
    $("#runcode").click(runCodeFunction);
	onLoad();
});
