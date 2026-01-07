import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const schedule = [
    { hours: "07:00 - 19:00" },
    { hours: "07:00 - 19:00" },
    { hours: "07:00 - 19:00" },
    { hours: "07:00 - 19:00" },
    { hours: "07:00 - 18:00" },
    { hours: "08:00 - 12:00" },
    { hours: t.hours.closed },
  ];

  const todayIndex = [6, 0, 1, 2, 3, 4, 5][new Date().getDay()];

  return (
    <section id="hours" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl"
        >
          <div className="text-center mb-8">
            <span className="text-sm uppercase tracking-widest text-primary">{t.hours.label}</span>
            <h2 className="font-serif text-4xl md:text-5xl">{t.hours.title}</h2>
          </div>

          <div className="rounded-2xl border bg-background shadow-soft overflow-hidden">
            <div className="flex items-center gap-3 border-b bg-primary/5 px-6 py-4">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-serif text-lg">{t.hours.header}</span>
            </div>
            <div className="divide-y">
              {schedule.map((item, i) => {
                const isToday = i === todayIndex;
                const isClosed = item.hours === t.hours.closed;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className={`px-6 py-4 flex justify-between items-center transition-colors ${
                      isToday ? "bg-primary/5" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />}
                      <span className={isToday ? "font-medium text-primary" : ""}>{t.hours.days[i]}</span>
                      {isToday && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                          {t.hours.today}
                        </span>
                      )}
                    </div>
                    <span className={isClosed ? "text-muted-foreground" : ""}>{item.hours}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
