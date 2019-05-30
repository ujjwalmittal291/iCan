function col()
{
  var coll = document.getElementsByClassName("collapsible");
  var i;

  function is()
  {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight)
    {
      content.style.maxHeight = null;
    }
    else
    {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }

  for (i = 0; i < coll.length; i++)
  {
    coll[i].addEventListener("click", is());
  }
}
