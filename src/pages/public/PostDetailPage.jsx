import React from "react";
import { Fragment } from "react";
import Section4 from "../../Components/Section4";
import Footer from "../../Components/Footer";
import { useParams } from "react-router-dom";
function PostDetailPage() {
  let param = useParams()
  console.log(param);
  
  return (
    <Fragment>
      <Section4></Section4>
      <Footer></Footer>
    </Fragment>
  );
}
export default PostDetailPage;
