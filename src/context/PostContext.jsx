import { createContext, useState } from "react";
let Base = import.meta.env.VITE_BASE_URL;
let data = []
async function getPosts() {
  try {
    const res = await fetch(`${Base}api/v1/articles/`);
    if (!res.ok) {
      throw new Error("apdia muammo");
    }
    data = await res.json();
    console.log(data);
    toast("apidan ma'lumot keldi");
  } catch (error) {
    console.log(error);
  }
}
getPosts();
export const Title = createContext(data);
