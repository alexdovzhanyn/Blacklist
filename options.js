var save_options = function() {
  var blacklistWords = document.getElementById('word').value;
  chrome.storage.sync.set({'blacklistWords': blacklistWords}, function() {
    // Update status to let user know options were saved.
    alert("saved");
  });
};

document.getElementById('save').addEventListener('click', save_options);
