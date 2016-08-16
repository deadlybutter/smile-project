// V1
// Container -fullscreen
//  - Wrapper
//
// CTA Button
//
// Gallery
//  - Photo
//  - Blog Entry

class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`container ${this.props.fullscreen ? '-fullscreen' : ''} ${this.props.name ? this.props.name : ''}`}>
        <div className="wrapper">
          {this.props.content}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Container content={<h1>#HappinessIs</h1>} fullscreen="true" name="introduction" />, document.getElementById('header'));
