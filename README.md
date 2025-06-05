Maybe bei den 3 managables hintergrund is in der farbe die man auswählt, und schriftfarbe kann man auch selbst aussuchen ( entweder schwarz oder weiß )

## Frontend - Submodule Issue

Fix this with the following git commands:

- `git rm --cached frontend`
- `Remove-Item -Recurse -Force frontend\.git`
- `git add frontend`
- `git commit -m "Fix: frontend as normal folder"`
- `git push`

## API - Call Issue
Add this line to /bootstrap/app.php
```php
api: __DIR__.'/../routes/api.php'
```

MAYBE: Publish cors config for further configurations.
```
php artisan config:publish cors
```