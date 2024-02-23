def canConstruct( ransomNote, magazine):
        """
        :type ransomNote: str
        :type magazine: str
        :rtype: bool
        """
        for letter in ransomNote:
            if letter in magazine:
                ransomNote = ransomNote.replace(letter, '')
                magazine = magazine.replace(letter, '')
            
            if ransomNote != '':
                return True
            else:
                return False

ransomNote = "aa"
magazine = "aab"

canConstruct(ransomNote, magazine)