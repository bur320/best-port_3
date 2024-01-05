"use client";
import "./sidebar.scss";
import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { routes } from "@/routes/routes";
import { useRouter } from "next/navigation";
import Image from "next/image";
import img from "../../../public/images/rabbani1.png";
import { ListItemIcon } from "@mui/material";

export default function Sidebar() {
  const router = useRouter();

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        bgcolor: "#2c5c62",
      }}
    >
      <div className="img">
        <Image
          src={img}
          height={300}
          width={300}
          className="img1"
          alt="image"
        />
      </div>
      <List className="list1">
        {routes.map((item) => (
          <ListItem
            disablePadding
            key={item?.path}
            sx={{
              display: "flex",
              flexGrow: 1,
              fontWeight: "bold",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <ListItemButton onClick={() => router.push(item?.path)}>
              <ListItemIcon sx={{ color: "white" }}>{item?.icon}</ListItemIcon>
              <ListItemText primary={item?.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
