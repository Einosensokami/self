"use client";

import { useCallback, useEffect, useState } from "react";
import DataGridHero from "@/components/ui/data-grid-hero";
import { useLang } from "@/components/lang-provider";
import { SectionSkills } from "@/components/section-skills";
import { SectionExperience } from "@/components/section-experience";
import { SectionContact } from "@/components/section-contact";
import { SectionFooter } from "@/components/section-footer";

type AnimationType = "pulse" | "wave" | "random";

type Cfg = {
  rows: number;
  cols: number;
  spacing: number;
  duration: number;
  color: string;
  animationType: AnimationType;
  pulseEffect: boolean;
  mouseGlow: boolean;
  opacityMin: number;
  opacityMax: number;
};

const COLORS = [
  "hsl(var(--green))",
  "hsl(var(--pink))",
  "hsl(var(--cyan))",
  "hsl(var(--yellow))",
  "hsl(var(--orange))",
];
const ANIMS: AnimationType[] = ["pulse", "wave", "random"];

export function SectionGridPage() {
  const { t } = useLang();

  const [cfg, setCfg] = useState<Cfg>({
    rows: 25,
    cols: 35,
    spacing: 4,
    duration: 5.0,
    color: "hsl(var(--green))",
    animationType: "pulse",
    pulseEffect: true,
    mouseGlow: true,
    opacityMin: 0.05,
    opacityMax: 0.6,
  });
  const [panelOpen, setPanelOpen] = useState(false);

  const randomize = useCallback(() => {
    const rand = (min: number, max: number) =>
      Math.random() * (max - min) + min;
    setCfg((c) => ({
      ...c,
      rows: Math.floor(rand(15, 40)),
      cols: Math.floor(rand(15, 40)),
      duration: rand(3, 10),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      animationType: ANIMS[Math.floor(Math.random() * ANIMS.length)],
      pulseEffect: Math.random() > 0.2,
      mouseGlow: Math.random() > 0.3,
      opacityMin: rand(0.05, 0.2),
      opacityMax: rand(0.5, 1.0),
      spacing: Math.floor(rand(2, 8)),
    }));
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName?.toLowerCase();
      if (tag === "input" || tag === "select" || tag === "textarea") return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const k = e.key.toLowerCase();
      if (k === "h") {
        e.preventDefault();
        setPanelOpen((v) => !v);
      } else if (k === "r") {
        e.preventDefault();
        randomize();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [randomize]);

  return (
    <DataGridHero
      rows={cfg.rows}
      cols={cfg.cols}
      spacing={cfg.spacing}
      duration={cfg.duration}
      color={cfg.color}
      animationType={cfg.animationType}
      pulseEffect={cfg.pulseEffect}
      mouseGlow={cfg.mouseGlow}
      opacityMin={cfg.opacityMin}
      opacityMax={cfg.opacityMax}
      background="hsl(var(--background))"
    >
      {/* Hero intro（h1 / p / buttons） */}
      <div className="hero-intro">
        <h1>{t["hero.title"]}</h1>
        <p>{t["hero.desc"]}</p>
        <div className="buttons">
          <a href="#skills" className="button">
            {t["hero.ctaPrimary"]}
          </a>
          <button
            type="button"
            className="button-outline"
            onClick={() => setPanelOpen(true)}
          >
            {t["hero.controls"]}
          </button>
        </div>
      </div>

      {/* 其它區塊 — 全部塞進同一個動態背景裡 */}
      <SectionSkills />
      <SectionExperience />
      <SectionContact />

      {/* Footer 一併放進來，視覺一致 */}
      <SectionFooter />

      {/* 控制面板 */}
      {panelOpen && (
        <ControlPanel
          cfg={cfg}
          setCfg={setCfg}
          onClose={() => setPanelOpen(false)}
          onRandomize={randomize}
        />
      )}
    </DataGridHero>
  );
}

function ControlPanel({
  cfg,
  setCfg,
  onClose,
  onRandomize,
}: {
  cfg: Cfg;
  setCfg: React.Dispatch<React.SetStateAction<Cfg>>;
  onClose: () => void;
  onRandomize: () => void;
}) {
  const { t } = useLang();
  return (
    <aside className="control-panel">
      <h3>{t["panel.title"]}</h3>
      <Slider
        label={t["panel.rows"]}
        min={5}
        max={50}
        step={1}
        value={cfg.rows}
        onChange={(v) => setCfg((c) => ({ ...c, rows: v }))}
      />
      <Slider
        label={t["panel.cols"]}
        min={5}
        max={50}
        step={1}
        value={cfg.cols}
        onChange={(v) => setCfg((c) => ({ ...c, cols: v }))}
      />
      <Slider
        label={t["panel.spacing"]}
        min={0}
        max={16}
        step={1}
        value={cfg.spacing}
        onChange={(v) => setCfg((c) => ({ ...c, spacing: v }))}
      />
      <Slider
        label={t["panel.duration"]}
        min={1}
        max={15}
        step={0.1}
        value={cfg.duration}
        onChange={(v) => setCfg((c) => ({ ...c, duration: v }))}
      />
      <Select
        label={t["panel.animation"]}
        value={cfg.animationType}
        options={[
          { label: t["panel.animation.pulse"], value: "pulse" },
          { label: t["panel.animation.wave"], value: "wave" },
          { label: t["panel.animation.random"], value: "random" },
        ]}
        onChange={(v) =>
          setCfg((c) => ({ ...c, animationType: v as AnimationType }))
        }
      />
      <Toggle
        label={t["panel.pulseEffect"]}
        value={cfg.pulseEffect}
        onChange={(v) => setCfg((c) => ({ ...c, pulseEffect: v }))}
      />
      <Toggle
        label={t["panel.mouseGlow"]}
        value={cfg.mouseGlow}
        onChange={(v) => setCfg((c) => ({ ...c, mouseGlow: v }))}
      />
      <Slider
        label={t["panel.opacityMin"]}
        min={0}
        max={1}
        step={0.05}
        value={cfg.opacityMin}
        onChange={(v) => setCfg((c) => ({ ...c, opacityMin: v }))}
      />
      <Slider
        label={t["panel.opacityMax"]}
        min={0}
        max={1}
        step={0.05}
        value={cfg.opacityMax}
        onChange={(v) => setCfg((c) => ({ ...c, opacityMax: v }))}
      />
      <div className="panel-buttons">
        <button type="button" onClick={onRandomize}>
          {t["panel.randomize"]}
        </button>
        <button type="button" onClick={onClose}>
          {t["panel.close"]}
        </button>
      </div>
    </aside>
  );
}

function Slider({
  label,
  min,
  max,
  step,
  value,
  onChange,
}: {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <label className="panel-control">
      <div className="label-row">
        <span>{label}</span>
        <span className="value">{Number(value).toFixed(2)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
      />
    </label>
  );
}

function Toggle({
  label,
  value,
  onChange,
}: {
  label: string;
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="panel-control toggle-control">
      <span>{label}</span>
      <button
        type="button"
        role="switch"
        aria-checked={value}
        onClick={() => onChange(!value)}
      >
        <span />
      </button>
    </label>
  );
}

function Select({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: { label: string; value: string }[];
  onChange: (v: string) => void;
}) {
  return (
    <label className="panel-control">
      <div className="label-row">{label}</div>
      <div className="select-wrapper">
        <select value={value} onChange={(e) => onChange(e.target.value)}>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>
    </label>
  );
}
