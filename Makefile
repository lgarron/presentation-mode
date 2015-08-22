
ZIP = presentation-mode.zip
SOURCE_FILES = fullscreen.png manifest.json presentation-mode.js

# Target name is expand to assist zsh autocomplete.
presentation-mode.zip: $(SOURCE_FILES)
	rm -f $(ZIP)
	zip $(ZIP) $(SOURCE_FILES)

.PHONY: clean
clean:
	rm $(ZIP)