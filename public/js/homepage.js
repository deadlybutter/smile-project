const BlogPost = React.createClass({
  render: function() {
    const blogData = this.props.data;
    const $blogData = $($.parseHTML(blogData.content));
    const feedImage = $($blogData.children('p.medium-feed-image')[0]).find('img');

    if (feedImage.length == 0) {
      console.log(blogData, $blogData, feedImage);
      return null;
    }

    console.log(blogData, feedImage);

    const styles = {
      backgroundImage: `url('${feedImage[0].src}')`
    };

    return (
      <div className="blog__item" style={styles}>
        <a href={blogData.link}>
          <div className="wrapper">
            <p>{blogData.title}</p>
          </div>
        </a>
      </div>
    );
  }
});

const BlogContainer = React.createClass({
  getInitialState: function() {
    return {
      items: []
    }
  },

  componentWillMount: function() {
    $.get('/feed', (data) => {
      this.setState({
        items: data
      });
    });
  },

  render: function() {
    const items = this.state.items;
    console.log(items);
    if (items.length == 0) {
      console.log(items, items.length);
      return null;
    }
    console.log("test");
    return (
      <div>
        {items.map(function(item, index) {
          return <BlogPost key={index} data={item} />;
        })}
      </div>
    );
  }
});

$(function() {
  ReactDOM.render(
    <BlogContainer />,
    document.getElementById('jsx-blog')
  );
});
