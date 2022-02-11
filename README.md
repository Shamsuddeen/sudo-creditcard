# sudo-creditcard

Credit Card Issuance System with **Sudo.Africa**

## Project Structure

### Client - Frontend (Vue JS)

- src
  - assets
  - compponents
  - router
  - service (api request file is located here)
  - store
  - views
Any other files remain as vue's structure

### Server - Backend (API)

- config (database connection)
- Controller
- Middleware
- Model
- public (Compiled copy of the client i.e frontend)
- Route
- Utils (Helper files)

## Project setup

1. Create at [Sudo Africa Website](https://www.sudo.africa) to obtian your SUDO_KEY
2. rename .env.example to .env
3. SUDO_KEY can be obtained here from step
4. ```cd server && npm install```
5. Run ``npm run dev`` Register a User with admin role the replace the Token obtained with AUTH_KEY

### Compiles and hot-reloads for development

```
npm run dev
```
