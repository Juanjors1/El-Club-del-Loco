# Space Invaders - Scope Document

## El Club del Loco

---

## Project Overview

Create a classic Space Invaders arcade game as a single HTML file (`invasores.html`) that follows the same pattern as the existing games in the repository. The game will be fully playable in a web browser, mobile-responsive, and include modern visual effects while maintaining the retro arcade feel.

---

## Technical Requirements

### 1. File Structure

- **Single HTML file**: `invasores.html`
- **Embedded CSS**: All styles within `<style>` tags
- **Embedded JavaScript**: All game logic within `<script>` tags
- **No external dependencies**: Pure vanilla JavaScript, HTML5 Canvas
- **Language**: Spanish interface (matching existing games)

### 2. Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile-responsive design
- Touch controls for mobile devices
- Keyboard controls for desktop

---

## Game Design Specifications

### 3. Core Game Elements

#### 3.1 Player Ship

- Green/cyan colored spaceship at bottom of screen
- Horizontal movement (left/right)
- Shooting mechanic (space bar or tap)
- 3 lives to start
- Collision detection with enemies and projectiles
- Respawn animation with brief invincibility

#### 3.2 Enemies (Invaders)

- **3 rows of aliens** (classic formation):
  - Row 1 (top): 8 aliens - Type A (30 points) - squid-like shape
  - Row 2 (middle): 8 aliens - Type B (20 points) - crab-like shape
  - Row 3 (bottom): 8 aliens - Type C (10 points) - octopus-like shape
- Total: 24 aliens per wave
- Movement pattern:
  - Move horizontally as a group
  - Drop down one row when reaching screen edge
  - Speed increases as aliens are destroyed
  - Random shooting from bottom-row aliens
- Simple sprite animations (2-frame alternating)

#### 3.3 Special Enemy

- **UFO/Ovni** that occasionally flies across top of screen
- Worth 50-300 points (random)
- Distinct sound when appearing
- Can be shot for bonus points

#### 3.4 Shields/Bunkers

- **4 defensive bunkers** between player and aliens
- Positioned evenly across screen
- Take damage from both player and enemy fire
- Gradually erode (destructible pixels)
- Provide strategic cover

#### 3.5 Projectiles

- **Player bullets**: Fast, single shot on screen at a time
- **Enemy bullets**: Slower, multiple can be active, zigzag pattern option
- Collision detection with all game objects

### 4. Game Mechanics

#### 4.1 Scoring System

- Type A alien: 30 points
- Type B alien: 20 points
- Type C alien: 10 points
- UFO: 50-300 points (random)
- Bonus points for completing waves quickly
- High score persistence (localStorage)

#### 4.2 Difficulty Progression

- Wave 1: Normal speed
- Each subsequent wave: Aliens move 25% faster (aggressive difficulty)
- More aggressive shooting patterns
- Less time between UFO appearances

#### 4.3 Win/Loss Conditions

- **Game Over** if:
  - Player loses all 3 lives
  - Aliens reach the bottom of the screen (player position)
- **Wave Complete** when:
  - All 24 aliens destroyed
  - Player advances to next wave with score carry-over
  - New wave spawns with increased difficulty

#### 4.4 Power-ups (Optional - Phase 2)

- Could add in future: rapid fire, shield repair, extra life

### 5. Visual Design

#### 5.1 Color Scheme

- Background: Dark space (black/dark blue gradient)
- Player ship: Bright green/cyan
- Aliens: Red/white/yellow depending on type
- Bullets: Bright white/yellow
- Shields: Green/cyan, darkening as damaged
- UFO: Bright red/orange
- Stars: Subtle white dots for background ambiance

#### 5.2 Effects

- Explosion animations for destroyed aliens
- Particle effects for destroyed ships
- Screen shake on player death
- Flashing colors for wave completion
- Smooth canvas animations (60 FPS target)
- Background color changes (similar to Tetris gradient animation)

#### 5.3 Responsive Design

- Canvas scales to fit screen
- Touch controls for mobile:
  - Left/Right buttons
  - Fire button
  - Virtual joystick option
- Minimum playable size: 320x480px
- Maximum canvas size: 800x600px

### 6. Audio Design

#### 6.1 Sound Effects (Web Audio API)

- Player shoot: Short laser sound
- Enemy destroyed: Small explosion
- Player destroyed: Larger explosion with reverb
- UFO appears: Distinctive "wobbling" tone
- Wave complete: Victory fanfare
- Game over: Descending tone

#### 6.2 Background Music

- Procedural "heartbeat" rhythm that speeds up as aliens get closer
- Classic Space Invaders style: dum-dum-dum-dum pattern
- Mute button available

### 7. User Interface

#### 7.1 Start Screen

- Title: "🚀 Invasores Espaciales"
- Subtitle: "El Club del Loco"
- Start button: "Iniciar Juego"
- High score display
- Instructions (keyboard/mobile controls)

#### 7.2 Game Screen

- Score display (top-left)
- High score (top-center)
- Lives remaining (top-right, ship icons)
- Wave number (top-right)
- Canvas game area (center)
- Mobile controls (bottom, if mobile device)

#### 7.3 Pause Menu

- Pause button / ESC key
- Resume, Restart, Mute options
- Semi-transparent overlay

#### 7.4 Game Over Screen

- Final score
- "New high score!" if applicable
- Restart button
- Return to menu button

### 8. Controls

#### 8.1 Desktop Controls

- **Arrow Left / A**: Move ship left
- **Arrow Right / D**: Move ship right
- **Space / W**: Fire weapon
- **ESC / P**: Pause game
- **M**: Toggle mute

#### 8.2 Mobile Controls

- **Touch left side**: Move left
- **Touch right side**: Move right
- **Tap center/fire button**: Shoot
- On-screen buttons for pause/mute

---

## Implementation Steps

### Phase 1: Core Structure (Steps 1-4) ✅ COMPLETE

**Step 1: HTML Structure** ✅

- Create basic HTML5 document structure
- Add meta tags for mobile viewport
- Create canvas element with ID
- Add UI containers (score, lives, buttons)
- Add start screen HTML

**Step 2: CSS Styling** ✅

- Define CSS variables for color scheme
- Style canvas (centered, bordered, shadow)
- Style start/pause/game-over screens
- Style score displays and UI elements
- Add mobile-responsive media queries
- Add button styles (matching existing games)
- Create animated background gradient

**Step 3: Game Canvas Setup** ✅

- Initialize canvas and 2D context
- Set canvas dimensions (responsive)
- Create coordinate system
- Setup requestAnimationFrame loop
- Create clear/draw cycle functions
- Add FPS counter (development only)

**Step 4: Game State Management** ✅

- Create game state object (START, PLAYING, PAUSED, GAME_OVER, WAVE_COMPLETE)
- State transition functions
- Game initialization function
- Reset game function
- Update and render based on state

**Phase 1 Status:** All UI screens working, game loop running, state management complete, localStorage persistence functional.

### Phase 2: Player Implementation (Steps 5-7) ✅ COMPLETE

**Step 5: Player Ship** ✅

- Create Player class/object:
  - Position (x, y)
  - Dimensions (width, height)
  - Speed
  - Lives remaining
  - Draw function (triangle ship with cockpit)
- Implement movement (left/right)
- Add screen boundary collision
- Draw ship to canvas
- Invincibility system with visual feedback

**Step 6: Player Shooting** ✅

- Create Bullet class/object:
  - Position (x, y)
  - Velocity (up/down)
  - Active state
  - Draw function with glow effect
- Fire bullet on spacebar
- Limit to 1 active player bullet (classic mechanic)
- Update bullet position each frame
- Remove bullets when off-screen
- Prevent auto-fire (one shot per key press)

**Step 7: Input Handling** ✅

- Keyboard event listeners (keydown/keyup)
- Track key states (pressed/released)
- Touch event listeners for mobile (touchstart/touchend)
- Mobile button controls working
- Prevent default behaviors for arrow keys and space

**Phase 2 Status:** Player ship fully controllable with keyboard (Arrow Keys, A/D, Space/W) and mobile touch controls. Single bullet mechanic working. Ship has boundary detection and invincibility timer after respawn.

### Phase 3: Enemy Implementation (Steps 8-10) ✅ COMPLETE

**Step 8: Alien Creation** ✅

- Create Alien class/object:
  - Type (A, B, C)
  - Position (x, y)
  - Dimensions (32x24 pixels)
  - Points value (30/20/10)
  - Animation frame (0 or 1)
  - Active state
  - Draw function (unique pixelated sprites per type)
- Create alien grid formation (3 rows x 8 columns = 24 aliens)
- Initialize alien array with proper spacing
- Type A: Red squid with tentacles and antenas
- Type B: Orange crab with pincers
- Type C: Yellow octopus with waving arms

**Step 9: Alien Movement** ✅

- Group movement logic:
  - Move all aliens horizontally together
  - Check if any alien hits screen edge
  - If edge hit: reverse direction, drop all aliens down 20px
- Speed increases as aliens are destroyed (10% faster per alien - aggressive)
- Animation frame toggle every 400ms for all aliens
- Game over detection when aliens reach player position
- Base movement interval: 800ms (gets faster as aliens die)

**Step 10: Alien Shooting** ✅

- Random alien shooting logic:
  - Select random alien from bottom row of each column
  - Shoots every 1.5 seconds (base interval)
- EnemyBullet class with:
  - Red colored projectiles
  - Zigzag motion effect
  - Slower speed than player bullets (200 px/s)
- Update enemy bullets (move down with sine wave)
- Draw enemy bullets (lightning bolt shape)
- Multiple enemy bullets can be active simultaneously

**Phase 3 Status:** 24 aliens spawning in proper formation with 3 distinct types. Aliens move as a group, descending when hitting edges. Speed increases dynamically as aliens are destroyed. Bottom-row aliens shoot red zigzagging bullets at player. Animations working with 2-frame toggle.

### Phase 4: Collisions & Shields (Steps 11-13) ✅ COMPLETE

**Step 11: Collision Detection** ✅

- Create collision detection function (AABB - Axis-Aligned Bounding Box)
- Check player bullet vs aliens:
  - Destroy alien ✓
  - Remove bullet ✓
  - Add to score (10/20/30 points based on type) ✓
  - Create explosion effect ✓
  - Auto-spawn next wave when all aliens destroyed ✓
- Check enemy bullet vs player:
  - Reduce lives ✓
  - Player explosion effect ✓
  - Respawn with 2s invincibility if lives remain ✓
  - Game over if no lives ✓
- Check bullets vs shields:
  - Both player and enemy bullets damage shields ✓
  - Bullet is destroyed on shield hit ✓
- Aliens reaching bottom triggers game over ✓

**Step 12: Shield Implementation** ✅

- Create Shield class with:
  - Position (x, y)
  - Dimensions (80x60 pixels)
  - Integrity grid (20x15 grid, 4px per pixel)
  - Classic bunker shape with curved top
  - Draw function (only intact pixels)
- Create 4 shields evenly spaced across screen
- Pixel-level damage system:
  - Check bullet collision with shield grid ✓
  - Remove pixels in 2-pixel radius around impact ✓
  - Gradual degradation (pixels fade before disappearing) ✓
  - Both player and enemy bullets cause damage ✓
- Green color (#00ff41) matching player ship

**Step 13: Explosion Effects** ✅

- Create Explosion class with:
  - Position (x, y)
  - Color (matches destroyed object)
  - Frame-based animation (12-20 frames)
  - Particle system
  - Active state tracking
- Particle effects for explosions:
  - 8-15 particles per explosion
  - Radial dispersion pattern
  - Gravity effect on particles
  - Size variation
- Explosions on:
  - Alien death (colored by alien type) ✓
  - Player death (larger, green explosion) ✓
- White flash effect on impact
- Auto-cleanup after animation completes
- Alpha fade-out effect

**Phase 4 Status:** Full collision detection working with AABB algorithm. 4 destructible pixel-based shields providing cover. Particle-based explosion effects on all destructions. Score system functional. Lives system with respawning. Wave progression implemented (auto-spawns next wave). Game is now fully playable from start to finish!

### Phase 5: Special Features (Steps 14-16) ✅ COMPLETE

**Step 14: UFO/Mystery Ship** ✅

- Create UFO object with:
  - Position (starts off-screen left or right randomly)
  - Speed (100 px/s horizontal movement)
  - Points value (random: 50, 100, 150, 200, 250, 300)
  - Active state tracking
  - Draw function (flying saucer with blinking lights)
- Random spawn timer:
  - Base: 15 seconds
  - Randomized: 10-25 seconds per spawn
  - Decreases with wave number (more frequent in later waves)
- Moves across top of screen (y=50)
- Can move left-to-right or right-to-left (random)
- Collision with player bullet:
  - Award random points (50-300)
  - Remove UFO with explosion
  - Create floating score display
  - Points shown above UFO when near center
- Auto-deactivates when off-screen

**Step 15: Scoring & UI Updates** ✅

- Score display update (already working) ✓
- Lives display with ship icons (already working) ✓
- Wave number display (already working) ✓
- High score tracking:
  - Loads from localStorage on start ✓
  - Updates if current score exceeds ✓
  - Saves to localStorage on game over ✓
- **NEW: Floating score animations:**
  - Pop-up "+points" text on UFO destruction
  - Yellow color with black outline
  - Floats upward and fades out over 1.5 seconds
  - Multiple can be active simultaneously

**Step 16: Wave Management** ✅

- Wave complete detection (all aliens destroyed) ✓
- **Wave complete screen:**
  - Semi-transparent black overlay
  - Large flashing text "¡OLEADA X COMPLETA!"
  - Shows next wave number
  - 2-second display duration
  - Speed bonus message if completed quickly (<30s)
  - Automatic progression (no button needed)
- Reset for next wave:
  - Spawn new alien formation ✓
  - Increase difficulty (25% faster movement and shooting) ✓
  - Keep player score and lives ✓
  - Shields remain damaged (realistic - no restoration)
  - UFO spawn rate increases with wave number
- Game freezes during wave complete (only explosions continue)

**Phase 5 Status:** UFO mystery ship spawns randomly and flies across top offering bonus points (50-300). Floating score popups show points earned. Professional wave complete screen with flashing text and auto-progression. Wave difficulty scales aggressively (25% faster per wave). UFO appears more frequently in later waves. Game feels complete and polished!

### Phase 6: Audio System (Steps 17-18) ✅ COMPLETE

**Step 17: Web Audio API Setup** ✅

- Create AudioContext (initialized on first user interaction)
- Tone generation functions:
  - `playTone()` - single frequency oscillator
  - `playChord()` - multiple frequencies simultaneously
  - Oscillator types: sine, square, sawtooth, triangle
  - Configurable frequency, duration, volume
- Mute toggle state (isMuted variable)
- Mute button functionality (M key + UI button)
- Browser compatibility handling (webkit prefix)

**Step 18: Sound Effects** ✅

- **Player shoot sound:**
  - Quick ascending laser (800Hz → 1000Hz)
  - Square wave, 50ms duration
- **Alien destroyed sound:**
  - Descending explosion (400Hz → 200Hz → 100Hz)
  - Sawtooth wave, 250ms total
- **Player destroyed sound:**
  - Large explosion cascade (600Hz → 80Hz)
  - 5-stage descending tones
  - Sawtooth with reverb effect, 600ms total
- **UFO appear sound:**
  - Wobbling oscillating tone (400Hz ↔ 450Hz)
  - Sine wave, characteristic Space Invaders sound
- **UFO destroyed sound:**
  - Special bonus chord (800/1000/1200Hz)
  - Ascending harmony, sine waves
- **Wave complete sound:**
  - Victory fanfare (C-E-G-C major chord)
  - Ascending notes: 262Hz, 330Hz, 392Hz, 523Hz
  - 150ms between notes
- **Game over sound:**
  - Sad descending scale (G-F-E-D-C)
  - Triangle wave, 200ms between notes
- **Background "heartbeat" rhythm:**
  - Four-beat pattern (dum-dum-dum-dum)
  - Frequencies: 180Hz, 160Hz, 140Hz, 120Hz
  - Square wave, 100ms per beat
  - **Dynamic speed:** Accelerates as aliens get lower
  - Base: 600ms interval
  - Speeds up based on alien Y position
  - Minimum: 200ms interval (very fast!)
  - Starts on game start, stops on pause/game over

**Phase 6 Status:** Complete audio system with Web Audio API. All sound effects implemented and integrated. Dynamic background heartbeat that speeds up with tension. Mute toggle working. Sound plays on: shooting, explosions, UFO, wave complete, game over. Professional arcade sound design!

### Phase 7: Screens & Menus (Steps 19-21)

**Step 19: Start Screen**

- Title and subtitle display
- High score display
- Control instructions
- Start button
- Hide canvas, show start screen
- Start button click handler:
  - Hide start screen
  - Show canvas
  - Initialize game
  - Start game loop

**Step 20: Pause Functionality**

- Pause state toggle (ESC or P key)
- Pause overlay (semi-transparent)
- Display:
  - "PAUSA"
  - Resume button
  - Restart button
  - Mute button
- Stop game updates when paused
- Resume button handler

**Step 21: Game Over Screen**

- Game over state triggered:
  - When lives reach 0
  - When aliens reach bottom
- Display:
  - "GAME OVER"
  - Final score
  - High score (with "¡Nuevo Récord!" if applicable)
  - "Jugar de Nuevo" button
  - "Menú Principal" button
- Button handlers

### Phase 8: Polish & Optimization (Steps 22-25)

**Step 22: Visual Effects**

- Background star field (parallax if desired)
- Screen shake on player death
- Flash effect on wave complete
- Smooth animations for transitions
- Color gradient background (animated like Tetris)
- Glow effects on bullets and explosions

**Step 23: Mobile Optimization**

- Detect mobile device (touch support)
- Show/hide mobile controls
- Touch area mapping:
  - Left half = move left
  - Right half = move right
  - Fire button = shoot
- Adjust canvas size for mobile
- Test on various screen sizes
- Prevent scrolling/bouncing on iOS

**Step 24: Performance Optimization**

- Object pooling for bullets and explosions
- Efficient collision detection (only check active objects)
- Minimize canvas clears (only redraw changed areas if needed)
- RequestAnimationFrame timing
- Optimize draw calls
- Remove debug code

**Step 25: Testing & Bug Fixes**

- Test all game states and transitions
- Test all controls (keyboard, mouse, touch)
- Verify collision detection accuracy
- Test on different browsers
- Test on mobile devices
- Balance difficulty and scoring
- Fix any visual glitches
- Ensure game is winnable and fun

### Phase 9: Final Integration (Steps 26-27)

**Step 26: Code Cleanup**

- Remove console.logs
- Remove debug features
- Add code comments (in Spanish)
- Organize functions logically
- Ensure consistent naming conventions
- Minify if desired (optional)

**Step 27: Repository Integration**

- Add link to `invasores.html` in `index.html` menu
- Test link works correctly
- Ensure style matches other games
- Create any necessary assets
- Update README if needed
- Final testing of complete experience

---

## Success Criteria

### Must Have (MVP)

✅ Player can move ship left/right

✅ Player can shoot bullets

✅ 24 aliens spawn in formation

✅ Aliens move and descend

✅ Aliens shoot back

✅ Collision detection works

✅ Score system functional

✅ Lives system (3 lives)

✅ Game over when lives = 0

✅ Wave completion and progression

✅ High score persistence

✅ Mobile-responsive

✅ Spanish language interface

### Should Have

✅ 4 defensive shields

✅ UFO/mystery ship

✅ Sound effects (mutable)

✅ Explosion animations

✅ Pause functionality

✅ Start and game-over screens

✅ Background music/rhythm

### Nice to Have (Future Enhancement)

⭐ Multiple difficulty modes

⭐ Leaderboard (more than just high score)

⭐ Different alien attack patterns

⭐ Power-ups

⭐ Boss waves

⭐ Achievements

---

## Estimated Complexity

- **Total Steps**: 27 discrete implementation steps
- **Estimated Development Time**: 4-6 hours for experienced developer
- **Lines of Code**: ~800-1200 lines (HTML + CSS + JS combined)
- **Similar Complexity To**: Tetris game in repo (slightly more complex due to collision detection)

---

## Design Patterns to Follow

Based on existing games in the repository:

1. **Single HTML file** with embedded CSS and JavaScript
2. **Dark theme** with bright game elements
3. **Animated gradient background** (like Tetris)
4. **Mobile-first responsive design**
5. **Spanish language** for all text
6. **requestAnimationFrame** for game loop
7. **localStorage** for persistence
8. **Web Audio API** for sounds (with mute option)
9. **Canvas 2D context** for rendering
10. **Clean, modern button styles** matching other games

---

## Notes

- Prioritize gameplay feel over visual complexity
- Keep the retro arcade aesthetic
- Ensure game is challenging but fair
- Mobile experience should be as good as desktop
- Consider adding difficulty selector in future
- Could add two-player mode in future enhancement

---

## Ready to Begin?

Once approved, we'll execute this scope step-by-step, building from the foundation up. Each phase builds on the previous, allowing for testing and refinement along the way.

**Estimated total time to complete: 1-2 hours with AI assistance**

---

_Document created: 2025-11-22_

_Project: El Club del Loco - Space Invaders_

_File: scope.md_
