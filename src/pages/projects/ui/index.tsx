import React from "react";
import Layout from "@/components/Layout";
import dynamic from "next/dynamic";
import { Button, Typography } from "@/components/ui";

const Ui = () => {
  return (
    <div>
      <Typography>Actions</Typography>
      <Button variant="info">Button</Button>
    </div>
  );
};

Ui.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Ui;
