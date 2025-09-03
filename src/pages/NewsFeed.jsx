// NewsFeed  Page containing Form and Postcard components where users can add, edit, delete, and save new posts to this page

import React, { Component } from "react";
import MyForm from "../components/MyForm";
import ComponentMeme from "../images/ComponentMeme.webp";
import MyPostCard from "../components/MyPostCard";
import AvatarImg from "../images/Avatar-Photo.jpg";

class NewsFeed extends Component {
  state = {
    headerBackgroundColor: "darkgrey",
    postList: [
      {
        id: 1,
        avatar: AvatarImg,
        postName: "Interface Programming",
        postDescription:
          "If you look closely, developing is still in your future.",
        postImage: ComponentMeme,
        imageAlt: "Component Meme",
        isEditing: false,
        originalPostName: "",
        originalPostDescription: "",
      },
    ],
  };

  addItem = (postName, postDescription) => {
    // Fixed bug where if no posts were present that you could still add a post
    let newId;
    if (this.state.postList.length > 0) {
      newId = this.state.postList.sort((a, b) => b.id - a.id)[0].id + 1;
    } else {
      newId = 1;
    }
    this.setState({
      postList: [
        ...this.state.postList,
        { id: newId, avatar: AvatarImg, postName, postDescription },
      ],
    });
  };

  removeItem = (id) => {
    this.setState({
      postList: this.state.postList.filter((post) => {
        if (post.id !== id) {
          return true;
        }
        return false;
      }),
    });
  };

  onHeaderChange = (id, newText) => {
    const updatedPost = this.state.postList.map((post) => {
      if (post.id === id) {
        return { ...post, postName: newText };
      }
      return post;
    });
    this.setState({ postList: updatedPost });
  };

  onParagraphChange = (id, newText) => {
    const updateParagraph = this.state.postList.map((post) => {
      if (post.id === id) {
        return { ...post, postDescription: newText };
      }
      return post;
    });
    this.setState({ postList: updateParagraph });
  };

  toggleEdit = (id, isEditing) => {
    const editUpdate = this.state.postList.map((post) => {
      if (post.id === id) {
        post.originalPostName = post.postName;
        post.originalPostDescription = post.postDescription;
        return { ...post, isEditing: isEditing };
      }
      return post;
    });
    this.setState({ postList: editUpdate });
  };

  discardEdits = (id) => {
    const discardUpdate = this.state.postList.map((post) => {
      if (post.id === id) {
        return {
          ...post,
          postName: post.originalPostName,
          postDescription: post.originalPostDescription,
          isEditing: false,
        };
      }
      return post;
    });
    this.setState({ postList: discardUpdate });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        headerBackgroundColor: "black",
        postList: this.state.postList,
      });
    }, 1500);
  }
  render() {
    return (
      <>
        <MyForm addFunction={this.addItem} />

        {this.state.postList
          .sort((a, b) => b.id - a.id)
          .map((item) => {
            return (
              <MyPostCard
                Id={item.id}
                PostDescription={item.postDescription}
                CardHeader={item.postName}
                AvatarImage={item.avatar}
                RemoveItem={this.removeItem}
                ImgUrl={item.postImage}
                ImageAlt={item.imageAlt}
                IsEditing={item.isEditing}
                OnHeaderChange={this.onHeaderChange}
                OnParagraphChange={this.onParagraphChange}
                ToggleEdit={this.toggleEdit}
                DiscardEdit={this.discardEdits}
              />
            );
          })}
      </>
    );
  }
}

export default NewsFeed;
