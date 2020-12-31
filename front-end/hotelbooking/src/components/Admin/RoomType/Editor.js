import React, {Component} from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { database } from '../../../firebase/firebase';
import _ from 'lodash';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import renderHTML from 'react-render-html';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'title': '',
      'body': '',
      posts: {}
    }
    //bind
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  //lifecycle
  componentDidMount() {
    database.on('value', snapshot => {
      this.setState({
        posts: snapshot.val()
      })
    })
  }

  //render posts from firebase
  renderPosts(){
    return _.map(this.state.posts, (post, key) => {
      return(
        <div key={key}>
          <h2>{post.title}</h2>
          <p>{renderHTML(post.body)}</p>
        </div>
      )
    });
  }

  onHandleChange(e) {
    this.setState({ body: e });
    console.log(this.state.body)
  }

  onHandleSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    }
    database.push(post);
    this.setState({
      title: '',
      body: '',
    })
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onHandleSubmit}>
          <div className="form-group">
            <input
              value={this.state.title}
              type = "text"
              name = "title"
              placeholder = "Title"
              onChange = {(e) => {this.setState({title: e.target.value})}}
              ref = "title"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <ReactQuill
              modules={Editor.modules}
              formats={Editor.formats}
              value={this.state.body}
              placeholder = "Body"
              onChange = {this.onHandleChange}
            />
          </div>
          <button className="btn btn-primary">Post</button>
        </form>
        <br/>
        {this.renderPosts()}
      </div>
    );
  }
}

Editor.modules = {
  toolbar: [
    [{'header': '1'}, {'header': '2'}, {font: []}],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}],
    ['link', 'image', 'video'],
    ['clean'],
    ['code-block']
  ]
}

Editor.formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'link',
  'image',
  'video',
  'code-block'
]

export default Editor;
