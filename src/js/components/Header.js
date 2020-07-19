export default class Header {
  constructor(options) {
    const { header, color } = options;
    this.header = header;
    this.color = color;
  }

  render(props) {
    const { isLoggedIn, userName } = props;
  }
}
