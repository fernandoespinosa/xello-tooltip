# XelloTooltipAssigment
## Annotated Requirements
### Objective

1. Create a single page Angular 4+ app with simple routing that has one state/view.
   - Project was generated with latest Angular CLI, using Angular 5 and Sass by default.
1. In it, place two buttons that when clicked; show a tooltip above the button with some text in it.
   - Using `NgbTooltip` from `ng-bootstrap`.
1. When button A is clicked, if button B’s tooltip is open it should close and vice versa. Only one tooltip should be visible at a time.
   - Initially implemented using triggers directly at `<button>`.
   - Created `TooltipManagerDirective` to handle special logic.
1. Either tooltip should close when clicked anywhere outside of it, but remain open if clicked inside.
   - Implemented on `document:click` in `TooltipManagerDirective`.
   - NOTE: Some hard thought was put on this.
     - I've deliberately implemented the following: **when clicking outside the tooltip, it will be closed, even if the click occurs in the corresponding button again**.
     - The initial implementation, which keeps the tooltip opened when the click occurs outside but inside the corresponding button, can be explored in tag `v0.1` commit `[182326a]`.
1. Either tooltip should close when ESC key is pressed.
   - Implemented via `document:keydown` in `TooltipManagerDirective`.

### Implementation

1. Tooltip functionality should be written as a reusable component.
   - Implemented `TooltipManagerDirective`.
   - While in my understanding the above is already a non-trivial interpretation or the requirement, I've wrapped all that logic into a `ManagedTooltipButton` componet. 
1. You are encouraged to use a starter/seed project to save time scaffolding
   - Latest Angular CLI was used.
1. You can organize the files/folders in any way.
   - Used default conventions.
1. The reviewer should be able to run your solution with a simple npm command
   - Once npm packages are installed, you can just run `npm start` or `yarn start` or `ng serve`.
1. You should submit your solution as a github repository link
   - Right here!

### Bonus
- If you scroll down to an open tooltip it should detect being at the edge of the screen and change position to be below the button +++
  - ... :worried:
- Style using Bootstrap sass ++
  - Project was bootstrapped with Angular CLI to use Sass from the beginning:
  ```
  ng new xello-tooltip-assigment --style=scss --skip-tests
  ```
  - Latest ng-bootstrap version 1.0.0-beta.7 and Bootstrap version 4.0.0-beta.2 were immediately installed.
  - _.angular-cli.json_ was updated accordingly. 
- Add at least one accessibility feature +
  - ... :worried:

# Further Notes
## Development
- Development was done in `dev` branch.
- Yarn package manager was used for convenience. There should be no issue if npm is used (I tested this).

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
