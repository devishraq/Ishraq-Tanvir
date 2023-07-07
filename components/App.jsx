import Intro from "./Intro";
import Greetings from "./Greetings";
import Body from "./Body";
import Icon from "./Icon";

export default () => (
  <div className="min-h-screen w-full text-slate-50">
    <Greetings />
    <Intro />
    <Body />
    <Icon />
  </div>
);
