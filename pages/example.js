import React, { Component } from 'react'
// require("semantic-ui-less/semantic.less");
import { Button, Icon, Label } from 'semantic-ui-react'

class ExamplePage extends Component {

  render() {

    return (
      <div>
        ExamplePage
        <i class="american sign language interpreting icon"></i>
        <i class="assistive listening systems icon"></i>
        <i class="audio description icon"></i>
        <i class="blind icon"></i>
        <i class="braille icon"></i>
        <i class="closed captioning outline icon"></i>
        <i class="closed captioning icon"></i>
        <i class="deaf icon"></i>
        <i class="low vision icon"></i>
        <i class="phone volume icon"></i>
        <i class="question circle outline icon"></i>
        <i class="question circle icon"></i>
        <i class="sign language icon"></i>
        <i class="tty icon"></i>
        <i class="universal access icon"></i>
        <i class="wheelchair icon"></i>
        <Button > Click </Button>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>

        <Button icon labelPosition='left'>
          <Icon name='pause' />
          Pause
        </Button>
        <Button icon labelPosition='right'>
          Next
          <Icon name='right arrow' />
        </Button>

        <Button as='div' labelPosition='right'>
        <Button color='red'>
          <Icon name='heart' />
          Like
          </Button>
          <Label as='a' basic color='red' pointing='left'>2,048</Label>
        </Button>
        <Button as='div' labelPosition='right'>
          <Button basic color='blue'>
            <Icon name='fork' />
            Fork
          </Button>
          <Label as='a' basic color='blue' pointing='left'>2,048</Label>
        </Button>
      </div>
    )
  }
}



export default ExamplePage