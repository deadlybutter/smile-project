const BlogPost = React.createClass({
  render: function() {
    const blogData = this.props.data;
    const $blogData = $.parseHtml(blogData.content);
    
    return (
      <div className="blog__item">
        <p>post</p>
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
    if (!items) {
      return;
    }

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
