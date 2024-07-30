const getUiCommentText = (comments, showComment = false) => {
  if(showComment) {
    return `Hide Comments`
  }
  else {
    if(comments > 0) {
      return `Show ${comments} Comments`
    }
    else {
      return `Comments`
    }
  }
}

export default getUiCommentText;