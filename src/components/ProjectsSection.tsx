import { motion } from "framer-motion";
import { useLang } from "@/context/LangContext";
import { t, tProjects } from "@/lib/i18n";
import project1 from "@/assets/project-1.webp";
import project2 from "@/assets/project-2.webp";
import project3 from "@/assets/project-3.webp";
import project4 from "@/assets/project-4.webp";

const projectImages = [project1, project2, project3, project4];

const tagColors: Record<string, string> = {
  Infrastructure: "bg-accent/15 text-accent",
  Cloud: "bg-accent/15 text-accent",
  "Fintech/Insurance": "bg-primary/15 text-primary",
  "Software Dev": "bg-primary/15 text-primary",
  Management: "bg-muted text-muted-foreground",
  Strategy: "bg-muted text-muted-foreground",
};

const ProjectsSection = () => {
  const { lang } = useLang();
  const projects = tProjects(lang);

  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-0.5 w-10 bg-primary/40 rounded-full" />
            <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase">
              {t("projects.title", lang)}
            </p>
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-bold text-foreground mb-16 tracking-tight">
            {t("projects.subtitle", lang)}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl overflow-hidden hover:border-primary/20 transition-all group"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={projectImages[i]}
                  alt={project.title}
                  loading="lazy"
                  width={800}
                  height={512}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              </div>
              <div className="p-6 pt-2">
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-secondary-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2.5 py-1 rounded-full font-medium ${tagColors[tag] || "bg-muted text-muted-foreground"}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
