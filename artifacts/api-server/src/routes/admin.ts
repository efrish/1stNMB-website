import { Router, type IRouter } from "express";
import { db, applicationsTable } from "@workspace/db";
import { desc } from "drizzle-orm";

const router: IRouter = Router();

function requireAdminAuth(req: any, res: any, next: any) {
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) {
    res.status(503).json({ error: "Admin not configured" });
    return;
  }
  const auth = req.headers["authorization"] ?? "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  if (token !== adminPassword) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  next();
}

router.get("/admin/applications", requireAdminAuth, async (req, res) => {
  try {
    const applications = await db
      .select()
      .from(applicationsTable)
      .orderBy(desc(applicationsTable.submittedAt));
    res.json(applications);
  } catch (err) {
    req.log.error(err, "Failed to fetch applications");
    res.status(500).json({ error: "Failed to fetch applications" });
  }
});

export default router;
