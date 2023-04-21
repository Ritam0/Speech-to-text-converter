#include<bits/stdc++.h>
using namespace std;
int main(){
    string s="My Name is Ritam";
    vector<string>ans;
    for(int i=0;i<s.size();i++){
        string temp="";
        while(s[i]!=' '){
            temp+=s[i];
            i++;
        }
        if(s[i]==' '){
            ans.push_back(temp);
        }
        if(i==s.size()-1)ans.push_back(temp);
    }
    reverse(ans.begin(),ans.end());
    for(auto it: ans)cout<<it<<" ";
}