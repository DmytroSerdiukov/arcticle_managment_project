import Mongo from "./Mongo";
import Parser from "rss-parser";
import Posts from "./Posts";

class RSSParser extends Posts {
  parser: any;
  constructor() {
    super();
    this.parser = this.getParserInstance();
    this.parse();
  }

  getParserInstance = () => {
    if (this.parser) return this.parser;
    const parser = new Parser();
    return parser;
  };

  parse = async () => {
    try {
      const feed = await this.parser.parseURL(process.env.PARSER_ROUTE);
      feed.items.forEach((el: any) => {
        this.createPost(el);
      });
    } catch (e) {
      console.log(e);
    }
  };
}

export default RSSParser;
