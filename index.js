const link = document.getElementById("row");
const video = `<div class="card">
          <div class="card-header">Videos</div>
          <div class="fb-video" data-href="https://fb.watch/lc7Cr5riJB/" data-width="350" data-show-text="false">
            <blockquote cite="https://www.facebook.com/wapborhan/videos/1147975936007650/"
              class="fb-xfbml-parse-ignore">
              <a href="https://www.facebook.com/wapborhan/videos/1147975936007650/"></a>
              <p></p>Posted by <a href="https://www.facebook.com/wapborhan">Borhan</a> on Thursday, February 17, 2022
            </blockquote>
         
        </div></div>`;
for (var i = 0; i < 8; i++) {
  // Create a new div element
  var div = document.createElement("div");
  div.classList.add("col-md-3");
  // Set some content for the div
  div.innerHTML = video;

  // Append the div to the container
  link.appendChild(div);
}
