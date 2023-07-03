import BottomMenuBar from "@/Components/BottomMenuBar";
import DiscussionForum from "@/Components/DiscussionForum";
import FeaturedSection from "@/Components/FeaturedSection";
import Header from "@/Components/Header";
import MainBody from "@/Components/MainBody";
import MarketStories from "@/Components/MarketStories";
import ModeOption from "@/Components/ModeOption";
import Sidebar from "@/Components/Sidebar";
import AddButton from "@/Components/misc/AddButton";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <FeaturedSection />
      <ModeOption />
      <MainBody />
      <AddButton/>
      <BottomMenuBar />
    </>
  );
}
