import React from "react";
import Form from "../../components/Form/Form";
import Layout from "../Layout/Layout";

const WritePage = () => (
  <Layout>
    <main>
      <section id="commentform">
        <h2>Write Something</h2>
        <Form />
      </section>
    </main>
  </Layout>
);

export default WritePage;
