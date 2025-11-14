# 🎨 Bukit Waruwangi - Design System Documentation

Dokumentasi lengkap design system untuk website Bukit Waruwangi. Gunakan dokumentasi ini sebagai referensi untuk membuat design di Figma atau platform design lainnya.

---

## 📋 Table of Contents
1. [Color Palette](#-color-palette)
2. [Typography](#-typography)
3. [Spacing System](#-spacing-system)
4. [Border Radius](#-border-radius)
5. [Shadows](#-shadows)
6. [Animations](#-animations)
7. [Components](#-components)

---

## 🎨 Color Palette

### Primary Colors

| Variable | HSL | Hexa | RGB | Deskripsi |
|----------|-----|------|-----|-----------|
| `--primary` | `122 39% 49%` | `#4BA84B` | `rgb(75, 168, 75)` | Warna hijau utama, digunakan untuk button, CTA, hover states |
| `--primary-foreground` | `0 0% 100%` | `#FFFFFF` | `rgb(255, 255, 255)` | Teks di atas background primary |
| `--secondary` | `123 38% 57%` | `#5FB95F` | `rgb(95, 185, 95)` | Hijau sekunder, lebih terang dari primary |
| `--secondary-foreground` | `0 0% 100%` | `#FFFFFF` | `rgb(255, 255, 255)` | Teks di atas background secondary |

### Background & Surface Colors

| Variable | HSL | Hexa | RGB | Deskripsi |
|----------|-----|------|-----|-----------|
| `--background` | `0 0% 100%` | `#FFFFFF` | `rgb(255, 255, 255)` | Background utama website (Light Mode) |
| `--foreground` | `125 20% 20%` | `#293F29` | `rgb(41, 63, 41)` | Warna teks utama (Light Mode) |
| `--card` | `0 0% 100%` | `#FFFFFF` | `rgb(255, 255, 255)` | Background card component |
| `--card-foreground` | `125 20% 20%` | `#293F29` | `rgb(41, 63, 41)` | Teks di dalam card |
| `--popover` | `0 0% 100%` | `#FFFFFF` | `rgb(255, 255, 255)` | Background popover/dropdown |
| `--popover-foreground` | `125 20% 20%` | `#293F29` | `rgb(41, 63, 41)` | Teks di dalam popover |

### Accent & Muted Colors

| Variable | HSL | Hexa | RGB | Deskripsi |
|----------|-----|------|-----|-----------|
| `--accent` | `123 38% 64%` | `#76CA76` | `rgb(118, 202, 118)` | Warna accent/highlight, hijau paling terang |
| `--accent-foreground` | `0 0% 100%` | `#FFFFFF` | `rgb(255, 255, 255)` | Teks di atas background accent |
| `--muted` | `120 20% 96%` | `#F4F7F4` | `rgb(244, 247, 244)` | Background section alternating, abu-abu kehijauan |
| `--muted-foreground` | `125 15% 45%` | `#617561` | `rgb(97, 117, 97)` | Teks muted/subtitle |

### Border & Input Colors

| Variable | HSL | Hexa | RGB | Deskripsi |
|----------|-----|------|-----|-----------|
| `--border` | `120 15% 90%` | `#E0E6E0` | `rgb(224, 230, 224)` | Border untuk card, input, separator |
| `--input` | `120 15% 90%` | `#E0E6E0` | `rgb(224, 230, 224)` | Border input fields |
| `--ring` | `122 39% 49%` | `#4BA84B` | `rgb(75, 168, 75)` | Focus ring color |

### Status Colors

| Variable | HSL | Hexa | RGB | Deskripsi |
|----------|-----|------|-----|-----------|
| `--destructive` | `0 84.2% 60.2%` | `#EB4141` | `rgb(235, 65, 65)` | Error/destructive actions |
| `--destructive-foreground` | `0 0% 100%` | `#FFFFFF` | `rgb(255, 255, 255)` | Teks di atas background destructive |

### Custom Nature Theme Colors

| Variable | HSL | Hexa | RGB | Deskripsi |
|----------|-----|------|-----|-----------|
| `--nature-gradient-start` | `122 45% 55%` | `#4DBE4D` | `rgb(77, 190, 77)` | Start color untuk gradient nature |
| `--nature-gradient-end` | `123 35% 70%` | `#8BD88B` | `rgb(139, 216, 139)` | End color untuk gradient nature |
| `--hero-overlay` | `122 39% 49%` | `#4BA84B` | `rgb(75, 168, 75)` | Overlay untuk hero section (40% opacity) |
| `--soft-shadow` | `120 20% 85%` | `#D0DBD0` | `rgb(208, 219, 208)` | Soft shadow color |

---

## 🔤 Typography

### Font Family

Website menggunakan **System Font Stack** (default Tailwind CSS):
```css
font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
```

**Rekomendasi Google Fonts** (jika ingin custom font):
- **Primary**: Inter, Poppins, atau Montserrat
- **Alternative**: Nunito, Work Sans

### Font Sizes per Section

#### Hero Section
| Element | Class | Size (px) | Size (rem) | Weight | Line Height |
|---------|-------|-----------|------------|--------|-------------|
| Main Title (Desktop) | `text-7xl` | 72px | 4.5rem | 700 (Bold) | Tight |
| Main Title (Mobile) | `text-5xl` | 48px | 3rem | 700 (Bold) | Tight |
| Subtitle (Desktop) | `text-xl` | 20px | 1.25rem | 400 (Regular) | 1.75rem |
| Subtitle (Mobile) | `text-lg` | 18px | 1.125rem | 400 (Regular) | 1.75rem |
| Button Text | `text-lg` | 18px | 1.125rem | 500 (Medium) | - |

#### Section Titles
| Element | Class | Size (px) | Size (rem) | Weight | Deskripsi |
|---------|-------|-----------|------------|--------|-----------|
| Main Section Title (Desktop) | `text-5xl` | 48px | 3rem | 700 (Bold) | About, Gallery, Activities, etc. |
| Main Section Title (Mobile) | `text-4xl` | 36px | 2.25rem | 700 (Bold) | - |
| Section Subtitle | `text-lg` | 18px | 1.125rem | 400 (Regular) | Deskripsi di bawah title |

#### Card Components
| Element | Class | Size (px) | Size (rem) | Weight | Deskripsi |
|---------|-------|-----------|------------|--------|-----------|
| Card Title | `text-xl` | 20px | 1.25rem | 600 (Semibold) | Judul card |
| Card Title Large | `text-2xl` | 24px | 1.5rem | 600 (Semibold) | Card title yang lebih besar |
| Card Description | `text-sm` | 14px | 0.875rem | 400 (Regular) | Text description |
| Card Body Text | `text-base` | 16px | 1rem | 400 (Regular) | Body text dalam card |

#### Lists & Content
| Element | Class | Size (px) | Size (rem) | Weight | Deskripsi |
|---------|-------|-----------|------------|--------|-----------|
| Body Text | `text-base` | 16px | 1rem | 400 (Regular) | Paragraph text |
| Small Text | `text-sm` | 14px | 0.875rem | 400 (Regular) | Caption, metadata |
| Tiny Text | `text-xs` | 12px | 0.75rem | 400 (Regular) | Footnotes |

#### Navigation
| Element | Class | Size (px) | Size (rem) | Weight | Deskripsi |
|---------|-------|-----------|------------|--------|-----------|
| Nav Links | `text-sm` | 14px | 0.875rem | 500 (Medium) | Desktop navigation |
| Mobile Nav Links | `text-base` | 16px | 1rem | 500 (Medium) | Mobile menu |

#### Buttons
| Element | Class | Size (px) | Size (rem) | Weight | Padding |
|---------|-------|-----------|------------|--------|---------|
| Large Button | `text-lg` | 18px | 1.125rem | 500 (Medium) | px-8 py-6 |
| Default Button | `text-sm` | 14px | 0.875rem | 500 (Medium) | px-4 py-2 |
| Small Button | `text-sm` | 14px | 0.875rem | 500 (Medium) | px-3 (h-9) |

#### Icons
| Location | Size | Class |
|----------|------|-------|
| Feature Cards | 32px | `w-8 h-8` |
| Buttons | 16px | `w-4 h-4` (auto from button) |
| Navigation | 20px | `w-5 h-5` |
| Large Icons | 48px | `w-12 h-12` |

---

## 📏 Spacing System

### Padding & Margin Scale

Tailwind menggunakan system spacing 0.25rem (4px) base:

| Class | Value | Pixels | Usage |
|-------|-------|--------|-------|
| `p-1` | 0.25rem | 4px | Tight spacing |
| `p-2` | 0.5rem | 8px | Icon padding |
| `p-3` | 0.75rem | 12px | Small elements |
| `p-4` | 1rem | 16px | **Standard spacing** |
| `p-6` | 1.5rem | 24px | **Card padding** |
| `p-8` | 2rem | 32px | Large padding |
| `p-12` | 3rem | 48px | Extra large |
| `p-16` | 4rem | 64px | Spacious sections |
| `p-20` | 5rem | 80px | **Section padding (vertical)** |

### Common Spacing Patterns

#### Sections
- **Section Vertical Padding**: `py-20` (80px top/bottom)
- **Section Horizontal Padding**: `px-4` (16px left/right)
- **Max Width Container**: `max-w-6xl mx-auto` (1152px centered)

#### Cards
- **Card Padding**: `p-6` (24px all sides)
- **Card Header**: `p-6` (24px)
- **Card Content**: `pt-0 p-6` (no top padding, 24px others)
- **Card Footer**: `p-6 pt-0` (no top padding, 24px others)

#### Gaps
- **Grid Gap (Small)**: `gap-4` (16px)
- **Grid Gap (Medium)**: `gap-6` (24px)
- **Grid Gap (Large)**: `gap-8` (32px)
- **Flex Gap**: `gap-2` atau `gap-4` (8px atau 16px)

#### Margins
- **Section Title Bottom**: `mb-4` atau `mb-6` (16px atau 24px)
- **Card Title Bottom**: `mb-2` atau `mb-4` (8px atau 16px)
- **Between Sections**: Handled by section `py-20`

---

## 🔲 Border Radius

### Radius Values

| Variable | Value | Pixels | Usage |
|----------|-------|--------|-------|
| `--radius` | 1rem | 16px | **Base radius** |
| `rounded-lg` | var(--radius) | 16px | Cards, large elements |
| `rounded-md` | calc(var(--radius) - 2px) | 14px | Medium elements |
| `rounded-sm` | calc(var(--radius) - 4px) | 12px | Small elements |
| `rounded-full` | 9999px | Full circle | Buttons, avatars, badges |
| `rounded-2xl` | 1rem | 16px | Gallery images |

### Usage per Component

| Component | Border Radius | Note |
|-----------|---------------|------|
| Cards | `rounded-lg` (16px) | Standard card |
| Buttons (CTA) | `rounded-full` | Hero buttons |
| Buttons (Default) | `rounded-md` (14px) | Normal buttons |
| Gallery Images | `rounded-2xl` (16px) | Photo gallery |
| Input Fields | `rounded-md` (14px) | Forms |
| Icon Containers | `rounded-full` | Circular backgrounds |

---

## 🌑 Shadows

### Shadow Definitions

| Class | CSS Value | Usage |
|-------|-----------|-------|
| `shadow-sm` | `0 1px 2px 0 rgba(0, 0, 0, 0.05)` | Subtle elevation |
| `shadow` | `0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)` | Default cards |
| `shadow-md` | `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)` | Elevated cards |
| `shadow-lg` | `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)` | **Hover state, CTAs** |
| `shadow-2xl` | `0 25px 50px -12px rgba(0, 0, 0, 0.25)` | Gallery hover |

### Custom Soft Shadow

Defined in CSS variables:
```css
--soft-shadow: 120 20% 85%; /* #D0DBD0 */
```

Digunakan untuk shadow dengan warna hijau soft yang matching dengan theme.

---

## ✨ Animations

### Scroll Animations

#### Fade In
```css
.scroll-fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.scroll-fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
```

**Usage**: Fade in saat element masuk viewport (30px slide up)

#### Slide Up
```css
.scroll-slide-up {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.scroll-slide-up.visible {
  opacity: 1;
  transform: translateY(0);
}
```

**Usage**: Slide up lebih dramatic (50px)

### Hover Animations

| Element | Hover Effect | Duration |
|---------|--------------|----------|
| Cards | `hover:shadow-lg hover:border-primary/50` | 300ms |
| Gallery Images | `hover:scale-105 hover:shadow-2xl` | 300ms |
| Buttons | `hover:bg-primary/90` | Default transition |
| Links | `hover:text-primary` | Default transition |

### Accordion Animation

```css
@keyframes accordion-down {
  from { height: 0; }
  to { height: var(--radix-accordion-content-height); }
}

@keyframes accordion-up {
  from { height: var(--radix-accordion-content-height); }
  to { height: 0; }
}
```

**Duration**: 200ms ease-out

### Stagger Delay Pattern

Untuk grid items atau list items:
```typescript
style={{ transitionDelay: isVisible ? `${index * 0.1}s` : "0s" }}
```

Setiap item delay 100ms (0.1s) dari item sebelumnya.

---

## 🧩 Components

### Button Variants

#### Default Button
```
Background: hsl(122 39% 49%) - #4BA84B
Text: hsl(0 0% 100%) - #FFFFFF
Hover: bg-primary/90
Padding: px-4 py-2 (16px 8px)
Height: h-10 (40px)
Border Radius: rounded-md (14px)
Font: text-sm font-medium (14px, 500)
```

#### Large Button (Hero CTA)
```
Background: White atau Primary
Text: Primary atau White
Hover: bg-white/90
Padding: px-8 py-6 (32px 24px)
Height: h-11+ (custom)
Border Radius: rounded-full
Font: text-lg font-medium (18px, 500)
Shadow: shadow-lg
```

#### Outline Button
```
Background: Transparent
Border: border border-input (1px #E0E6E0)
Text: foreground
Hover: bg-accent text-accent-foreground
Padding: Same as default
```

#### Secondary Button
```
Background: hsl(123 38% 57%) - #5FB95F
Text: hsl(0 0% 100%) - #FFFFFF
Hover: bg-secondary/80
```

#### Ghost Button
```
Background: Transparent
Text: foreground
Hover: bg-accent text-accent-foreground
No border
```

### Card Component

#### Standard Card
```
Background: hsl(0 0% 100%) - #FFFFFF
Border: 1px solid hsl(120 15% 90%) - #E0E6E0
Border Radius: rounded-lg (16px)
Padding: p-6 (24px)
Shadow: shadow-sm
Hover: hover:shadow-lg hover:border-primary/50 (transition 300ms)
```

#### Card Structure
```
CardHeader: p-6, flex flex-col space-y-1.5
CardTitle: text-2xl font-semibold (24px, 600)
CardDescription: text-sm text-muted-foreground (14px)
CardContent: p-6 pt-0 (no top padding)
CardFooter: flex items-center p-6 pt-0
```

### Navigation

#### Desktop Navigation
```
Background: bg-background/95 backdrop-blur-md
Border Bottom: 1px solid border
Height: Fixed
Shadow: shadow-sm
Position: sticky top-0 z-50
```

#### Navigation Links
```
Font: text-sm font-medium (14px, 500)
Color: text-foreground
Hover: text-primary
Active: text-primary font-semibold
Padding: px-3 py-2 (12px 8px)
Border Radius: rounded-md
Transition: colors
```

### Input Fields

```
Background: bg-background
Border: border border-input (1px #E0E6E0)
Border Radius: rounded-md (14px)
Padding: px-3 py-2 (12px 8px)
Height: h-10 (40px)
Font: text-base md:text-sm (16px mobile, 14px desktop)
Focus: ring-2 ring-ring ring-offset-2
Placeholder: text-muted-foreground
```

### Accordion

```
Trigger Font: text-base font-medium (16px, 500)
Trigger Padding: py-4
Content Padding: pb-4 pt-0
Animation: accordion-down/up (200ms ease-out)
Border: border-b border-border
```

---

## 📱 Responsive Breakpoints

Tailwind default breakpoints:

| Breakpoint | Min Width | Usage |
|------------|-----------|-------|
| `sm:` | 640px | Small tablets |
| `md:` | 768px | **Tablets** |
| `lg:` | 1024px | **Desktop** |
| `xl:` | 1280px | Large desktop |
| `2xl:` | 1536px | Extra large |

### Common Responsive Patterns

#### Text Sizes
```
Hero Title: text-5xl md:text-7xl
Section Title: text-4xl md:text-5xl
Subtitle: text-lg md:text-xl
Body: text-base (no change)
```

#### Grid Layouts
```
Gallery: grid-cols-1 md:grid-cols-3
Features: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
```

#### Flex Direction
```
Buttons: flex-col sm:flex-row
```

---

## 🎯 Design Principles

### Visual Identity
1. **Natural & Fresh**: Gunakan green palette yang menenangkan
2. **Clean & Spacious**: Banyak white space, tidak crowded
3. **Modern**: Rounded corners, soft shadows, blur effects
4. **Accessible**: High contrast ratio, readable fonts

### Color Usage Guidelines
1. **Primary Green**: CTA buttons, active states, important elements
2. **Secondary Green**: Supporting elements, hover states
3. **Accent Green**: Highlights, icons, badges
4. **Muted Gray-Green**: Backgrounds, alternating sections
5. **White**: Main background, cards, clean surfaces

### Typography Guidelines
1. **Hierarchy**: Jelas antara H1, H2, H3, body text
2. **Readability**: Cukup line-height dan letter-spacing
3. **Consistency**: Gunakan scale yang konsisten (text-sm, base, lg, xl, etc.)
4. **Weight**: Bold (700) untuk titles, Semibold (600) untuk subtitles, Medium (500) untuk buttons/links, Regular (400) untuk body

### Spacing Guidelines
1. **Consistent**: Selalu gunakan multiples of 4px (0.25rem)
2. **Breathing Room**: Section padding minimal 80px (py-20)
3. **Card Spacing**: Standard 24px (p-6)
4. **Grid Gaps**: 16px-24px (gap-4 hingga gap-6)

---

## 📦 Component Checklist

Saat membuat design di Figma, pastikan buat komponen untuk:

- [ ] Buttons (Default, Large, Outline, Secondary, Ghost)
- [ ] Cards (Standard, Hover State)
- [ ] Navigation (Desktop, Mobile)
- [ ] Input Fields (Text, Focus State, Error State)
- [ ] Icons (32px, 20px, 16px)
- [ ] Badges/Tags
- [ ] Accordion Items
- [ ] Gallery Images (with hover)
- [ ] Section Headers (Title + Subtitle)
- [ ] Footer
- [ ] Hero Section
- [ ] Form Elements (Checkbox, Radio, Select)

---

## 🔗 Resources

- **Tailwind CSS Documentation**: https://tailwindcss.com
- **Radix UI Components**: https://www.radix-ui.com
- **Lucide Icons**: https://lucide.dev
- **Google Fonts**: https://fonts.google.com

---

**Last Updated**: 2025-11-14  
**Version**: 1.0  
**Project**: Bukit Waruwangi Landing Page
