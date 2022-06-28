import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Dalgom dtX" });
});

router.get("/about", (req, res) => {
  res.render("about", { title: "Acerca de" });
});

router.get("/contact", (req, res) => {
  res.render("contact", { title: "Contácto" });
});

export default router;
