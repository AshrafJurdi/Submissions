var a= document.querySelector('button');

a.addEventListener('click', reset);

function reset() {
    if (confirm('Are you sure?')) {
      var name = (document.querySelector('#name').value = '');
      var surname = (document.querySelector('#surname').value = '');
      var city = (document.querySelector('#city').value = '');
    } else {
      // Do Nothing.
    }
}