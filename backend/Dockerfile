FROM php:8.2-fpm

# Install required extensions
RUN apt-get update && apt-get install -y \
    libpq-dev libzip-dev unzip \
    && docker-php-ext-install pdo pdo_mysql zip

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www

# Copy application files
COPY . .

# Install dependencies
RUN composer install --no-dev --optimize-autoloader

CMD ["php-fpm"]
