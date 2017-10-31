import {h, Component} from 'preact'

interface Props {
  text: string;
  width: number;
}

export class BtnListItem extends Component<Props, {}> {
  constructor() {
    super()
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
  }

  render() {
    const style = {
      flexBasis: `${this.props.width}px`
    }
    return <li style={style}><button onClick={this.onClick}>{this.props.text}</button></li>
  }
}
