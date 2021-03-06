/**
 * Example module to parse JSON to ...
 */

class RootParser {
  constructor(options) {
    this.output = "";
    this.useOutput = true;
    this.useCDN = false;
    this.useModule = "";
    this.linksJS = "";
    this.linksCSS = "";

    this.page = {
      title: "",
      titleBegin: "",
      titleEnd: "",
      top: "",
      head: "",
      headBegin: "",
      headEnd: "",
      begin: "",
      end: "",
      bottom: "",
    };

    this.headerContent = "";
    this.bodyContent = "";
    this.footerContent = "";
    this.styles = {
      default: "",
      dark: "",
      light: "",
      white: "",
      primary: "",
      link: "",
      info: "",
      warning: "",
      danger: "",
    };

    this.classes = {
      text: "",
      bold: "",
      italic: "",
      underline: "",
      url: "",
      title: "",
      subTitle: "",
      code: "",
    };

    if (typeof options === "object") {
      if (options.useCDN === true) {
        this.useCDN = true;
      } else {
        this.useCDN = false;
      }
    }
  }

  top(options) {
    this.beginOptions = options;
    if (typeof this.beginOptions.title === "string") {
      this.page.title = this.beginOptions.title;
    }
    this.output = "";
  }

  begin() {
    this.output = this.output + this.page.begin;
  }
  end() {
    this.output = this.output + this.page.end;
  }

  bottom() {
    if (typeof this.beginOptions === "object") {
      let output = this.page.top;
      if (this.page.head != "") {
        output = output + this.page.headBegin;
        output = output + this.page.head;
        if (this.page.title != "") {
          output =
            output +
            this.page.titleBegin +
            this.page.title +
            this.page.titleEnd;
        }
        if (this.linksCSS != "") {
          output = output + this.linksCSS + "\n";
        }
        output = output + this.page.headEnd;
      }
      this.output =
        output + this.output + this.linksJS + "\n" + this.page.bottom;
    }
  }

  toClass() {
    let classString = "";
    if (arguments.length > 0) {
      let arr = Array();
      for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === "string" && arguments[i] != "") {
          arr.push(arguments[i]);
        }
      }
      if (arr.length > 0) {
        classString = ' class="' + arr.join(" ") + '"';
      }
    }
    return classString;
  }

  toString(input) {
    if (typeof input === "undefined") {
      return "";
    } else {
      return input.toString();
    }
  }

  toOutput(input) {
    if (this.useOutput) {
      this.output = this.output + "\t" + input + "\n";
    }
    return input;
  }

  css() {
    return this.toOutput(this.linksCSS);
  }

  js() {
    return this.toOutput(this.linksJS);
  }

  text(input) {
    return this.toString(input.data);
  }

  title(input) {
    return this.toOutput(input.data);
  }

  subTitle(input) {
    return this.toOutput(input.data);
  }

  subTitle2(input) {
    return this.toOutput(input.data);
  }

  subTitle3(input) {
    return this.toOutput(input.data);
  }

  filter(input) {
    return this.toOutput(input.data);
  }

  code(input) {
    return this.toOutput(input.data);
  }

  bold(input) {
    return this.toOutput(input.data);
  }

  italic(input) {
    return this.toOutput(input.data);
  }

  underline(input) {
    return this.toOutput(input.data);
  }

  url(input) {
    return this.toOutput(input.data);
  }

  tag(input) {
    return this.toOutput(input.data);
  }
}

module.exports = RootParser;
