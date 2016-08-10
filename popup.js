function getFile(url) {
  $.ajax({
  url: url + "deploymentDetails.json",
  cache: false,
  success: function( data ) {
    $('.deploymentDetails ul').append('<li><b>Octopus</b>: '+data.octopusReleaseNumber+'</li>');
    $('.deploymentDetails ul').append('<li><b>Version</b>: '+data.version+'</li>');
    $('.deploymentDetails ul').append('<li><b>Deployed By</b>: '+data.deployedBy+'</li>');
    $('.deploymentDetails ul').append('<li><b>Deployed On</b>: '+data.deployedOn+'</li>');
  },
  error: function() {
    $('.deploymentDetails ul').append('<li>"deploymentDetails.json" file not found in root!</li>');
  }
});
}

document.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.query({ //This method output active URL 
    "active": true,
    "currentWindow": true,
    "status": "complete",
    "windowType": "normal"
  }, function (tabs) {
    for (tab in tabs) {
      getFile(tabs[tab].url);
    }
  });

});
