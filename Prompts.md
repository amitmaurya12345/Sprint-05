# 📋 Project Development Prompts: Trello-Style Task Board

This file documents the structural engineering journey and system development lifecycle of the **Premium Cross-Platform Trello Board**. It acts as a reference for prompt engineering, incremental feature implementation, and debugging workflows.

---

## 🚀 Phase 1: Core Foundation & MVP Setup
*Objective: Initialize a clean React + Vite workspace with state management for tasks split into standard columns (`todo`, `in-progress`, `done`).*

### Prompt 1: Initial Architecture Setup
> Create a Trello-style Task Board application using React.js and standard CSS. The board should have three columns: "To Do", "In Progress", and "Done". Every task item should be represented as an individual card containing a title and a dynamic layout structure. Implement standard state persistence using LocalStorage so data survives browser updates.

### Prompt 2: State Flow & Basic Operations
> Build form controls to add tasks with specific text strings. Include simple interaction handles to move tasks linearly between columns and provide a functional mechanism to delete tasks from the global array. Deliver explanatory code files with clear annotations.

---

## 🎨 Phase 2: Structural Refinements & Inline Mutations
*Objective: Introduce priority badge indicators, micro-interactions, and direct text mutations without modal overlays.*

### Prompt 3: Priority System & Badges
> Update the task schema to accept an internal categorical property for `priority` (with values: `low`, `medium`, `high`). Render a modern dynamic indicator tag on each card mapped directly to its relative severity level.

### Prompt 4: Click-to-Edit Inline Typography
> Implement click-to-edit capabilities directly on the task card title typography. When clicked, it should seamlessly toggle into a focused input field. Pressing 'Enter' or triggering `onBlur` should finalize the mutation, update the central state array, and persist to local storage.

---

## ⚡ Phase 3: Advanced Architectures & Real-Time Filtering
*Objective: Introduce global search mechanics, deprecate action buttons, and implement custom CSS styles.*

### Prompt 5: Global Real-Time Search Filter
> Implement a non-destructive global search input field inside the top control deck. The component should accept text and instantly filter the rendered arrays on the screen without corrupting or wiping out the underlying central state tasks array.

### Prompt 6: Premium CSS Glassmorphism Makeover
> Overhaul the entire application styling with modern SaaS product aesthetics (similar to Notion or Linear). Use a soft gradient background (`#f8fafc` to `#e2e8f0`), glassmorphic panels for columns using `backdrop-filter: blur()`, clean priority pills, dynamic hover translations (`translateY(-3px)`), and a dashed premium indicator underline when hovering over editable text targets.

---

## 📱 Phase 4: Cross-Platform Touch & Mobile Responsiveness
*Objective: Transition from native HTML5 limits to physics-based library systems to support mobile finger-dragging.*

### Prompt 7: Mobile View Media Queries
> Write standard CSS Media Queries to make the layout fully responsive. On screens under `768px`, transform the horizontal columns layout into a clean vertical stack. Ensure inputs and action cards stretch to full width for comfortable touch target access.

### Prompt 8: Migration to Cross-Platform DnD Framework
> Since native HTML5 drag-and-drop handles do not natively process mobile touch events, replace the default event parameters with `@hello-pangea/dnd`. Wrap the architecture in a sound `<DragDropContext>`, configure `<Droppable>` target vectors for the columns, and use `<Draggable>` layers on cards to support both desktop mouse pointers and responsive mobile touch gestures simultaneously.

### Prompt 9: Type Safeguard & String-ID Bug Fix
> Fix the state synchronization bug where older legacy tasks do not respond to library actions. Ensure that during state initialization, all legacy number IDs are explicitly cast into strings (`String(task.id)`), since the tracking framework strictly requires unique string tokens to execute structural shifting.
