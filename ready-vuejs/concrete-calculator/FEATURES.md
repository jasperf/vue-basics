# Concrete Calculator - Feature Documentation

**Purpose:** Foundation concrete quantity calculator with order form
**Language:** Russian UI
**Current Stack:** Vue 2.3 + Vuetify 0.13 + Vuelidate 0.5 + Webpack 2

## Core Features

### 1. Foundation Type Selector

**UI Component:** Button group with 5 foundation types

**Behavior:**
- 5 foundation types labeled "Type 1" through "Type 5"
- Each button toggles active state (teal background when selected)
- Default: Type 1 (basement1) selected
- Updates preview image when changed
- **Disabled when:** Footer or Header plates are enabled (switches to basement6/7/8)

**Types:**
- `basement1` - Simple rectangular perimeter
- `basement2` - Perimeter + 1 internal wall (long)
- `basement3` - Perimeter + 2 internal walls (long)
- `basement4` - Perimeter + 1 long wall + 1 short wall
- `basement5` - Perimeter + 1 long wall + 2 short walls

### 2. Measurement Inputs

**4 Required Fields:**

| Field | Label (Russian) | Validation | Unit |
|-------|----------------|------------|------|
| Side A | Длина стороны А, м | Must be numeric | meters |
| Side B | Длина стороны B, м | Must be numeric | meters |
| Side C | Высота ленты C, м | Must be numeric | meters |
| Side D | Толщина ленты D, см | Must be numeric | centimeters |

**Validation:**
- Real-time validation on input
- Error message: "В поле должны быть только цифры!" (red text)
- No min/max constraints on these fields
- Fields accept decimals (e.g., "5.5")

### 3. Foundation Preview Image

**Dynamic Image Display:**
- Shows schematic diagram of selected foundation type
- Image source: `src/assets/basement[1-8].jpg`
- 8 total images for different configurations:
  - basement1-5: Standard foundation types
  - basement6: With footer plate only
  - basement7: With header plate only
  - basement8: With both footer and header plates

**Image Container:**
- Responsive height: 500px desktop, 400px mobile (<600px), 300px small (<400px)
- Contains: Maintains aspect ratio

### 4. Additional Options - Footer Plate

**UI Component:** Checkbox + Conditional Input

**Checkbox:**
- Label: "Добавить плиту основание" (Add footer plate)
- Toggles conditional input field

**Conditional Input (when checked):**
- Label: "Толщина плиты, см" (Plate thickness, cm)
- Default value: 25 cm
- Validation:
  - Required (shows orange warning)
  - Must be between 25-40 cm (shows red error)
  - Error message: "Толщина должна быть от 25 до 40см"
- Info notice: "Рекомендуемая толщина от 25 до 40 см" (teal, with icon)

**Side Effects:**
- Disables foundation type selector
- Changes preview to basement6 (or basement8 if header also active)
- Adds to concrete calculation

### 5. Additional Options - Header Plate

**UI Component:** Checkbox + Conditional Input

**Checkbox:**
- Label: "Добавить плиту перекрытие" (Add header/ceiling plate)
- Toggles conditional input field

**Conditional Input (when checked):**
- Label: "Толщина плиты, см" (Plate thickness, cm)
- Default value: 18 cm
- Validation:
  - Required (shows orange warning)
  - Must be between 18-22 cm (shows red error)
  - Error message: "Толщина должны быть от 18 до 22см!"
- Info notice: "Рекомендуемая толщина от 18 до 22см" (teal, with icon)

**Side Effects:**
- Disables foundation type selector
- Changes preview to basement7 (or basement8 if footer also active)
- Adds to concrete calculation

### 6. Concrete Grade Selector

**UI Component:** Dropdown select

**Options:** 12 concrete grades with prices (rubles per cubic meter)

| Grade | Price (₽/m³) |
|-------|--------------|
| m100  | 3400         |
| m150  | 3550         |
| m200  | 3750         |
| m250  | 3850         |
| m300  | 3950 (recommended) |
| m350  | 4050 (recommended) |
| m400  | 4600         |
| m450  | 4850         |
| m500  | 5000         |
| m550  | 5050         |
| m600  | 5200         |
| m650  | 5500         |

**Default:** m100 (3400 ₽)
**Info notice:** "Рекомендуемая марка м300-м350" (Recommended grade m300-m350)

### 7. Results Display

**Three Calculated Values:**

1. **Volume Required** (cubic meters)
   - Label: "Потребуется, куб.м бетона"
   - Format: 2 decimal places (e.g., "12.34")
   - Filter: `| meters` (toFixed(2))

2. **Concrete Grade**
   - Label: "Марка бетона"
   - Displays selected grade name (e.g., "m300")

3. **Total Cost** (rubles)
   - Label: "Всего на сумму, руб"
   - Format: Russian locale currency (e.g., "47 300,00 ₽")
   - Filter: `| currency` (toLocaleString with RUB)

**Display:**
- All values shown in teal color
- Large title font size
- Responsive layout (stacked on mobile)

### 8. Order Button & Dialog

**Order Button:**
- Text: "Оформить заказ" (Place order)
- Teal background, white text
- **Only visible when:** All 4 measurement fields have non-zero values
- Opens modal dialog on click

**Order Dialog/Modal:**

**Title:** "Оформление заказа" (Order placement)

**Form Fields:**

| Field | Icon | Validation |
|-------|------|------------|
| Name (Имя) | account_box | Required (orange warning) |
| Phone (Телефон) | phone | Required + numeric only (red error) |
| Email | email | Must be valid email format (red error) |
| Address (Адрес доставки) | none | Multi-line, optional |

**Validation Messages:**
- Required: "Введите в поле значение!" (orange)
- Numeric: "В поле должны быть только цифры!" (red)
- Email: "Введите правильный email!" (red)

**Actions:**
- "отменить" (Cancel) - Closes dialog, clears nothing
- "отправить" (Send) - POST to `http://localhost:3000/users`, clears form on success

**Dialog Behavior:**
- Persistent modal (can't close by clicking outside)
- 600px max width
- Centered on screen
- Form clears after successful submission
- Dialog closes after submission

## Calculation Logic

### Volume Calculations

**Variables:**
- `sideA`, `sideB`: Foundation length/width (meters)
- `sideC`: Foundation height (meters)
- `sideD`: Foundation thickness (converted cm → meters: `* 0.01`)
- `allowance`: 0.2 meters (20cm overhang for footer plate)

**Formulas:**

```javascript
// Base area
base = sideA * sideB

// Interior dimensions
innerA = sideA - (sideD * 2)
innerB = sideB - (sideD * 2)

// Type 1: Simple perimeter
s1 = base - (innerA * innerB)

// Long wall segment
long = (sideA - sideD * 2) * sideD

// Short wall segment
short = sideD * ((sideB - sideD * 3) / 2)

// Type 2: Perimeter + 1 long wall
s2 = s1 + long

// Type 3: Perimeter + 2 long walls
s3 = s1 + (long * 2)

// Type 4: Perimeter + 1 long + 1 short
s4 = s2 + short

// Type 5: Perimeter + 1 long + 2 short
s5 = s2 + (short * 2)

// Footer plate (if enabled)
foot = 0
if (footer.status) {
  delta = allowance * 2  // 0.4m total
  foot = (sideA + delta) * (sideB + delta) * (footer.value * 0.01)
}

// Header plate (if enabled)
head = 0
if (header.status) {
  head = base * (header.value * 0.01)
}

// Final output
output = (selected_s_value * sideC) + foot + head
```

### Cost Calculation

```javascript
sum = output * mark.price
```

## Responsive Breakpoints

### Desktop (>600px)
- Full 2-column layout for forms
- Image height: 500px
- Type selector: horizontal buttons
- All headings visible

### Mobile (<600px)
- Stacked single-column layout
- Image height: 400px
- Type selector: vertical buttons
- Headline font size: 36px
- Dialog padding: 10px

### Small Mobile (<400px)
- Image height: 300px
- Headline font size: 30px

## Color Scheme

**Primary:** Teal (various shades)
- `teal--text darken-4` - Main headline
- `teal--text darken-2` - Buttons
- `teal--text` - Info notices, results
- `teal` background - CTA button
- `#e0f2f1` - Active button background

**Backgrounds:**
- `grey lighten-4` - Card backgrounds

**Validation:**
- `orange--text` - Warning messages (required fields)
- `red--text` - Error messages (invalid data)

## Technical Details

### Dependencies

**Production:**
```json
{
  "axios": "^0.18.1",
  "pug": "^2.0.0-rc.2",
  "vue": "^2.3.4",
  "vue-router": "^2.3.1",
  "vuelidate": "^0.5.0",
  "vuetify": "^0.13.0"
}
```

**Dev:**
- Webpack 2.3.3
- Babel 6
- Stylus
- Various loaders

### File Structure

```
src/
├── App.vue          # Main calculator component (500+ lines)
├── main.js          # Vue instance + Vuetify setup
├── components/
│   └── example.vue  # Unused example component
├── assets/
│   ├── basement1.jpg
│   ├── basement2.jpg
│   ├── basement3.jpg
│   ├── basement4.jpg
│   ├── basement5.jpg
│   ├── basement6.jpg
│   ├── basement7.jpg
│   └── basement8.jpg
└── stylus/
    └── main.styl    # Custom styles
```

## Known Issues / Edge Cases

1. **API Endpoint:** Hardcoded to `http://localhost:3000` (needs mock server or update)
2. **No Loading States:** Order submission has no loading indicator
3. **No Error Handling:** Network errors not displayed to user
4. **Integer Parsing:** Uses `parseInt()` which truncates decimals (may want parseFloat)
5. **Image Loading:** No fallback if images fail to load
6. **Validation Timing:** Validation fires on every input (no debounce)
7. **No Persistence:** No localStorage or session storage
8. **Browser Support:** Targets modern browsers only (> 1%, last 2 versions)

## Testing Checklist

When migrating, verify:

- [ ] All 5 foundation types selectable
- [ ] Type buttons disabled when plates enabled
- [ ] All 4 input fields accept numeric values
- [ ] Validation errors show correctly
- [ ] Footer plate checkbox toggles input
- [ ] Footer validation (25-40cm)
- [ ] Header plate checkbox toggles input
- [ ] Header validation (18-22cm)
- [ ] Preview image changes correctly (all 8 images)
- [ ] Concrete grade selector works
- [ ] Volume calculation accuracy (compare with Vue 2)
- [ ] Cost calculation accuracy
- [ ] Results display correct number format
- [ ] Order button only shows when ready
- [ ] Order dialog opens/closes
- [ ] Order form validation works
- [ ] Order submission (mock API)
- [ ] Responsive on mobile (400px, 600px breakpoints)
- [ ] All Russian text displays correctly
- [ ] No console errors

## Migration Notes

### Must Preserve:
- All calculation formulas (exact same logic)
- All validation rules
- All 8 image assets
- Russian language text
- Responsive breakpoints
- Color scheme (teal/grey)

### Can Improve:
- Modern UI components (Tailwind + DaisyUI)
- Better validation UX (VeeValidate 4)
- Loading states
- Error handling
- API endpoint configuration
- Image optimization
- Accessibility (ARIA labels)
- TypeScript support (optional)

---

**Document Version:** 1.0
**Last Updated:** November 13, 2025
**Status:** Complete feature audit for Vue 3 migration
