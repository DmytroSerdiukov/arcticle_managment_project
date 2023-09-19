import Mongo from "./Mongo";
import Parser from "rss-parser";
import Posts from "./Posts";

class RSSParser extends Posts {
  parser: any;
  isFetched: boolean;
  constructor() {
    super();
    this.parser = this.getParserInstance();
    this.isFetched = false;
  }

  getParserInstance = () => {
    if (this.parser) return this.parser;
    const parser = new Parser();
    return parser;
  };

  parse = async () => {
    try {
      if (!this.isFetched) {
        const feed = await this.parser.parseURL(
          "https://netflixtechblog.com/feed"
        );

        feed.items.forEach((el: any) => {
          this.createFetchedPost(el);
        });
        this.isFetched = true;
      }
    } catch (e) {
      console.log(e);
    }
  };
}

export default RSSParser;
