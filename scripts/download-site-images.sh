#!/bin/bash
# Download real images from bugwerecoffee.com

IMGDIR="/home/z/my-project/public/images"
BASE="https://bugwerecoffee.com/wp-content/uploads/2025/11"

# Create backup of old images
mkdir -p "$IMGDIR/old-backup"
cp "$IMGDIR"/*.* "$IMGDIR/old-backup/" 2>/dev/null

echo "=== Downloading WhatsApp images from bugwerecoffee.com ==="

# WhatsApp images (real photos from the site)
declare -A RENAME_MAP

# Hero/slider images - WhatsApp photos
RENAME_MAP["WhatsApp-Image-2025-11-29-at-09.26.11.jpeg"]="hero-1.jpeg"
RENAME_MAP["WhatsApp-Image-2025-11-29-at-09.25.56.jpeg"]="hero-2.jpeg"
RENAME_MAP["WhatsApp-Image-2025-11-29-at-09.26.29.jpeg"]="hero-3.jpeg"
RENAME_MAP["WhatsApp-Image-2025-11-29-at-09.26.31.jpeg"]="hero-4.jpeg"

# Coffee program
RENAME_MAP["WhatsApp-Image-2025-11-29-at-09.26.07.jpeg"]="coffee-farmer-hd.jpeg"

# Cocoa program
RENAME_MAP["WhatsApp-Image-2025-11-29-at-09.26.01.jpeg"]="cocoa-plantation-hd.jpeg"

# Community
RENAME_MAP["WhatsApp-Image-2025-11-29-at-09.26.34.jpeg"]="community-1.jpeg"
RENAME_MAP["WhatsApp-Image-2025-11-29-at-09.26.42.jpeg"]="community-2.jpeg"

# Impact stories
RENAME_MAP["WhatsApp-Image-2025-11-29-at-09.26.23.jpeg"]="impact-coffee.jpeg"
RENAME_MAP["WhatsApp-Image-2025-11-29-at-09.26.27.jpeg"]="impact-cocoa.jpeg"
RENAME_MAP["WhatsApp-Image-2025-11-29-at-09.26.43.jpeg"]="impact-fertilizer.jpeg"

# News images
RENAME_MAP["WhatsApp-Image-2025-11-29-at-09.26.41.jpeg"]="news-1.jpeg"
RENAME_MAP["WhatsApp-Image-2025-11-29-at-09.26.42-1.jpeg"]="news-2.jpeg"
RENAME_MAP["WhatsApp-Image-2025-11-29-at-09.26.42-2.jpeg"]="news-3.jpeg"

# About photo
RENAME_MAP["WhatsApp-Image-2025-11-29-at-09.26.07.jpeg"]="about-photo.jpeg"

# Extra WhatsApp images for other pages
RENAME_MAP["WhatsApp-Image-2025-11-29-at-09.25.56.jpeg"]="hero-coffee.jpeg"
RENAME_MAP["WhatsApp-Image-2025-11-29-at-09.26.01.jpeg"]="cocoa-farmer-hd.jpeg"
RENAME_MAP["WhatsApp-Image-2025-11-29-at-09.26.29.jpeg"]="seedlings-hd.jpeg"
RENAME_MAP["WhatsApp-Image-2025-11-29-at-09.26.31.jpeg"]="fertilizer-support.jpeg"
RENAME_MAP["WhatsApp-Image-2025-11-29-at-09.26.34.jpeg"]="community-meeting-hd.jpeg"
RENAME_MAP["WhatsApp-Image-2025-11-29-at-09.26.23.jpeg"]="coffee-harvest-hd.jpeg"
RENAME_MAP["WhatsApp-Image-2025-11-29-at-09.26.27.jpeg"]="cocoa-seedlings-hd.jpeg"
RENAME_MAP["WhatsApp-Image-2025-11-29-at-09.26.43.jpeg"]="coffee-couple-hd.jpeg"

# Logo
RENAME_MAP["logo-bug.jpeg"]="logo-bugwere-hd.jpeg"

# Background
RENAME_MAP["mt-sample-background.jpg"]="bg-sample-hd.jpg"

# Screenshot (team/group photo)
RENAME_MAP["Screenshot-from-2025-11-29-19-55-15.png"]="about-group-photo.png"

# Board member photos - these are small, keep existing ones
# Primrose, Moses, Abraham, David photos - keep current

# Download all WhatsApp images first
echo "Downloading WhatsApp images..."
for src in "${!RENAME_MAP[@]}"; do
    dest="${RENAME_MAP[$src]}"
    url="$BASE/$src"
    filepath="$IMGDIR/$dest"
    
    echo -n "  $src -> $dest ... "
    http_code=$(curl -sL -w "%{http_code}" -o "$filepath" "$url" 2>/dev/null)
    if [ "$http_code" = "200" ]; then
        size=$(stat -c%s "$filepath" 2>/dev/null || echo "0")
        echo "OK (${size} bytes)"
    else
        echo "FAILED (HTTP $http_code)"
        rm -f "$filepath"
    fi
done

echo ""
echo "=== Download complete ==="
echo ""
echo "Files in images directory:"
ls -la "$IMGDIR"/*.jpeg "$IMGDIR"/*.jpg "$IMGDIR"/*.png 2>/dev/null | wc -l
