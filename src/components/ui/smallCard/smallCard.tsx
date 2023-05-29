import { Card, CardHeader, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import SmallCardBody from "./smallCardBody";
import { SmallCardModel } from "./core/_models";

export default function SmallCard({image,title,subtitle,date,city}: SmallCardModel) {
  return (
    <Card>
      <CardHeader
        className="align-baseline p-0"
        avatar={
          <Image
            className="object-fit radius-8"
            src={image as string}
            width="100"
            height="100"
            alt={title as string}
          />
        }
        title={
          <Typography variant="h6" paddingTop={1} component="h2">
            <strong>{title}</strong>
          </Typography>
        }
        subheader={
          <Typography
            variant="body2"
            component="p"
            className="one-line"
          >
            {subtitle}
          </Typography>
        }
      ></CardHeader>
      <SmallCardBody date={date} city={city} />
    </Card>
  );
}
