# import textract
# import re
# import string
# import fitz
import sys
text = ""
text=sys.argv[1];
print("Text is ::",text )
# doc= fitz.open("resume.pdf")
# for page in doc:

#     text+= page.getText()
# # Convert all strings to lowercase
# text = text.lower()
# Remove numbers
#text = re.sub(r'\d+','',text)
# Remove punctuation
#text = text.translate(str.maketrans('','',string.punctuation))
# str=input("Enter keywords to search separated by -:\n")
# list=str.split("-")
# for i in range(0,len(list)):
#     list[i]=list[i].lower()
# dic={}
# print(text) 
# for i in list:
#     dic[i]=0
# print(dic)
# for i in list:
#     if i in text :
#         dic[i]=1
# print(dic)
# score=0;
# for i in list:
#     if(dic[i]==1):score+=1
# print("MATCH = ",100*score/len(list),"%")

