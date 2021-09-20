import React, {Component} from 'react'
import {EditorState, convertToRaw} from 'draft-js'
import {Editor} from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import styled from 'styled-components'

const CustomTextArea = styled.textarea`
display: none;
`
const TextAreaContainer = styled.div`
width: 80%;
margin: 30px auto;
`
const CustomEditor = styled(Editor)`
padding-left: 10px;
`

export default class TextArea extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    })
  }

  render() {
    const {editorState} = this.state
    return (
      <TextAreaContainer>
        <CustomEditor
          editorState={editorState}
          wrapperClassName="wrapper-class"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
        <CustomTextArea
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        />
      </TextAreaContainer>
    )
  }
}