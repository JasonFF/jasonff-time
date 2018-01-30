function createAndDownloadFile(fileName, content) {
  var aTag = document.createElement('a');
  var blob = new Blob([content]);
  aTag.download = fileName;
  aTag.href = URL.createObjectURL(blob);
  aTag.click();
  URL.revokeObjectURL(blob);
}
const file = this.refs.input.files[0]
    const reader = new FileReader();
    reader.onload = function(e) {
      var data = JSON.parse(e.target.result);
      data.bcd = "hello, world"
      createAndDownloadFile('bcd.json', JSON.stringify(data))
    }
    reader.readAsText(file)