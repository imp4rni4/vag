
def read_usernames(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
    
        usernames = {line.strip() for line in file if line.strip()}
    return usernames

# مسیر فایل‌ها را وارد کنید
file1_path = 'following.txt'   # نام فایل اول
file2_path = 'followers.txt'   # نام فایل دوم


usernames_file1 = read_usernames(file1_path)
usernames_file2 = read_usernames(file2_path)


only_in_file1 = usernames_file1 - usernames_file2


print("resault")
for username in sorted(only_in_file1):
    print(username)

