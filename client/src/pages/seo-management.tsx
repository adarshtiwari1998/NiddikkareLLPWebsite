import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Globe, Code, FileText, Settings, ExternalLink } from 'lucide-react';
import { seoData } from '@/data/seo-data';
import SEO from '@/components/seo';

export default function SEOManagement() {
  const [selectedPage, setSelectedPage] = useState('/');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPages = Object.keys(seoData).filter(path =>
    path.toLowerCase().includes(searchTerm.toLowerCase()) ||
    seoData[path].pageTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentSEO = seoData[selectedPage];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <SEO 
        customSEO={{
          pageTitle: "SEO Management Dashboard | NIDDIKKARE LLP - Internal",
          metaDescription: "Internal SEO management dashboard for NIDDIKKARE LLP website optimization and metadata management.",
          robotsDirective: "noindex,nofollow"
        }}
      />
      
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Settings className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">SEO Management Dashboard</h1>
              <p className="text-gray-600">Manage SEO metadata for all NIDDIKKARE LLP website pages</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-2xl font-bold">{Object.keys(seoData).length}</p>
                    <p className="text-sm text-gray-600">Total Pages</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="text-2xl font-bold">100%</p>
                    <p className="text-sm text-gray-600">SEO Coverage</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Code className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-2xl font-bold">{Object.values(seoData).filter(seo => seo.structuredData).length}</p>
                    <p className="text-sm text-gray-600">With Schema</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2 justify-between">
                  <div>
                    <p className="text-sm font-medium">Public URLs</p>
                    <div className="space-y-1 mt-2">
                      <a href="/sitemap.xml" target="_blank" className="flex items-center text-xs text-blue-600 hover:underline">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        sitemap.xml
                      </a>
                      <a href="/robots.txt" target="_blank" className="flex items-center text-xs text-blue-600 hover:underline">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        robots.txt
                      </a>
                      <a href="/schema.json" target="_blank" className="flex items-center text-xs text-blue-600 hover:underline">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        schema.json
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Page Selection */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Search className="w-5 h-5" />
                  <span>Select Page</span>
                </CardTitle>
                <div className="relative">
                  <Input
                    placeholder="Search pages..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9"
                  />
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </CardHeader>
              <CardContent className="max-h-96 overflow-y-auto">
                <div className="space-y-2">
                  {filteredPages.map((path) => (
                    <button
                      key={path}
                      onClick={() => setSelectedPage(path)}
                      className={`w-full text-left p-3 rounded-lg border transition-colors ${
                        selectedPage === path
                          ? 'bg-primary/10 border-primary text-primary'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="font-medium text-sm truncate">
                        {path === '/' ? 'Home Page' : path}
                      </div>
                      <div className="text-xs text-gray-500 truncate mt-1">
                        {seoData[path].pageTitle}
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* SEO Details */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <Globe className="w-5 h-5" />
                    <span>SEO Details: {selectedPage === '/' ? 'Home Page' : selectedPage}</span>
                  </CardTitle>
                  <Badge variant="outline">
                    {currentSEO.robotsDirective || 'index,follow'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="basic" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="basic">Basic SEO</TabsTrigger>
                    <TabsTrigger value="opengraph">Open Graph</TabsTrigger>
                    <TabsTrigger value="structured">Schema</TabsTrigger>
                    <TabsTrigger value="technical">Technical</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="basic" className="space-y-4">
                    <div>
                      <Label htmlFor="title">Page Title</Label>
                      <Input
                        id="title"
                        value={currentSEO.pageTitle}
                        readOnly
                        className="bg-gray-50"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Length: {currentSEO.pageTitle.length} characters
                      </p>
                    </div>
                    
                    <div>
                      <Label htmlFor="description">Meta Description</Label>
                      <Textarea
                        id="description"
                        value={currentSEO.metaDescription}
                        readOnly
                        className="bg-gray-50"
                        rows={3}
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Length: {currentSEO.metaDescription.length} characters
                      </p>
                    </div>
                    
                    <div>
                      <Label htmlFor="keywords">Meta Keywords</Label>
                      <Input
                        id="keywords"
                        value={currentSEO.metaKeywords || ''}
                        readOnly
                        className="bg-gray-50"
                      />
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="opengraph" className="space-y-4">
                    <div>
                      <Label htmlFor="og-title">OG Title</Label>
                      <Input
                        id="og-title"
                        value={currentSEO.ogTitle || currentSEO.pageTitle}
                        readOnly
                        className="bg-gray-50"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="og-description">OG Description</Label>
                      <Textarea
                        id="og-description"
                        value={currentSEO.ogDescription || currentSEO.metaDescription}
                        readOnly
                        className="bg-gray-50"
                        rows={3}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="og-image">OG Image URL</Label>
                      <Input
                        id="og-image"
                        value={currentSEO.ogImage}
                        readOnly
                        className="bg-gray-50"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="og-type">OG Type</Label>
                      <Input
                        id="og-type"
                        value={currentSEO.ogType}
                        readOnly
                        className="bg-gray-50"
                      />
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="structured" className="space-y-4">
                    <div>
                      <Label htmlFor="structured-data">Structured Data (JSON-LD)</Label>
                      <Textarea
                        id="structured-data"
                        value={JSON.stringify(currentSEO.structuredData, null, 2)}
                        readOnly
                        className="bg-gray-50 font-mono text-sm"
                        rows={15}
                      />
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="technical" className="space-y-4">
                    <div>
                      <Label htmlFor="canonical">Canonical URL</Label>
                      <Input
                        id="canonical"
                        value={currentSEO.canonicalUrl}
                        readOnly
                        className="bg-gray-50"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="robots">Robots Directive</Label>
                      <Input
                        id="robots"
                        value={currentSEO.robotsDirective}
                        readOnly
                        className="bg-gray-50"
                      />
                    </div>
                    
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="font-medium text-blue-900 mb-2">SEO Analysis</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Title Length:</span>
                          <Badge variant={currentSEO.pageTitle.length <= 60 ? "default" : "destructive"}>
                            {currentSEO.pageTitle.length <= 60 ? 'Good' : 'Too Long'}
                          </Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Description Length:</span>
                          <Badge variant={currentSEO.metaDescription.length <= 160 ? "default" : "destructive"}>
                            {currentSEO.metaDescription.length <= 160 ? 'Good' : 'Too Long'}
                          </Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Has Structured Data:</span>
                          <Badge variant={currentSEO.structuredData ? "default" : "secondary"}>
                            {currentSEO.structuredData ? 'Yes' : 'No'}
                          </Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Indexable:</span>
                          <Badge variant={currentSEO.robotsDirective.includes('noindex') ? "destructive" : "default"}>
                            {currentSEO.robotsDirective.includes('noindex') ? 'No' : 'Yes'}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
                
                <div className="mt-6 pt-6 border-t">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-medium text-yellow-900 mb-2">📝 Edit Instructions</h4>
                    <p className="text-sm text-yellow-800">
                      To edit SEO data, modify the values in <code className="bg-yellow-100 px-1 rounded">client/src/data/seo-data.ts</code> and the changes will be reflected automatically across all pages.
                    </p>
                  </div>
                  
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h4 className="font-medium text-green-900 mb-2">🚀 Public SEO URLs</h4>
                    <p className="text-sm text-green-800 mb-3">
                      These URLs are available for Google Search Console and other SEO tools:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      <a 
                        href="/sitemap.xml" 
                        target="_blank" 
                        className="flex items-center p-2 bg-white border border-green-300 rounded text-sm hover:bg-green-50 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2 text-green-600" />
                        sitemap.xml
                      </a>
                      <a 
                        href="/robots.txt" 
                        target="_blank" 
                        className="flex items-center p-2 bg-white border border-green-300 rounded text-sm hover:bg-green-50 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2 text-green-600" />
                        robots.txt
                      </a>
                      <a 
                        href="/schema.json" 
                        target="_blank" 
                        className="flex items-center p-2 bg-white border border-green-300 rounded text-sm hover:bg-green-50 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2 text-green-600" />
                        schema.json
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}