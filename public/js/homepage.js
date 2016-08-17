// V1
// Container -fullscreen
//  - Wrapper
//
// CTA Button
//
// Gallery
//  - Photo
//  - Blog Entry

const BlogPost = React.createClass({
  render: function() {
    return (
      <div className="blog__item">

      </div>
    );
  }
});

$(document).on('ready', function() {
  console.log("Uhh");
  $.get('/feed', function(data) {
    console.log(data);
  });
});
