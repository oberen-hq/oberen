import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="mainContainer">
        <Topbar />
        <div className="homeContainer">
          <Sidebar />
          <Feed />
        </div>
      </div>
    </>
  );
}
