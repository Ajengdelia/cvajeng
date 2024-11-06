import Hero from "./components/hero";
import Riwayatpendidikan from "./components/riwayatpendidikan";
import Riwayatpekerjaan from "./components/riwayatpekerjaan";
import Skill from "./components/skill";
import Personalinfo from "./components/personalinfo"
import Hobbies from "./components/hobbies"
import Rating from "./components/rating"
import "./ajeng-delia.css";

export default function CVonline() {
  return (
    <section>
      <Hero />
      <Riwayatpendidikan />
      <Riwayatpekerjaan />
      <Skill />
      <Personalinfo/>
      <Hobbies/>
      <Rating/>
    </section>
  );
}
