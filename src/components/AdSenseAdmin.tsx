'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock, Settings, AlertCircle, CheckCircle } from 'lucide-react';

interface AdSenseSettings {
  enabled: boolean;
  autoAds: boolean;
  publisherId: string;
  headerAdCode: string;
  sidebarAdCode: string;
  contentAdCode: string;
  footerAdCode: string;
}

const DEFAULT_SETTINGS: AdSenseSettings = {
  enabled: false,
  autoAds: false,
  publisherId: '',
  headerAdCode: '',
  sidebarAdCode: '',
  contentAdCode: '',
  footerAdCode: ''
};

const STORAGE_KEY = 'taxgainscalc_adsense_settings';
const ADMIN_PASSWORD = 'TaxAdmin@2026!Secure';

export default function AdSenseAdmin() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [settings, setSettings] = useState<AdSenseSettings>(DEFAULT_SETTINGS);
  const [isLoading, setIsLoading] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Check for ?admin=true URL parameter
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('admin') === 'true') {
        setIsOpen(true);
      }
    }
  }, []);

  // Keyboard shortcut: Ctrl+Shift+A
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Load settings from localStorage
  useEffect(() => {
    if (isAuthenticated && typeof window !== 'undefined') {
      const savedSettings = localStorage.getItem(STORAGE_KEY);
      if (savedSettings) {
        try {
          setSettings(JSON.parse(savedSettings));
        } catch {
          setSettings(DEFAULT_SETTINGS);
        }
      }
    }
  }, [isAuthenticated]);

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
      setPassword('');
    } else {
      setError('Invalid password. Please try again.');
    }
  };

  const handleSave = () => {
    if (typeof window !== 'undefined') {
      setIsLoading(true);
      setSaveSuccess(false);
      
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 3000);
      } catch {
        setError('Failed to save settings');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsAuthenticated(false);
    setPassword('');
    setError('');
    setSaveSuccess(false);
  };

  const updateSetting = (key: keyof AdSenseSettings, value: string | boolean) => {
    setSettings({ ...settings, [key]: value });
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            AdSense Admin Panel
          </DialogTitle>
          <DialogDescription>
            Manage your Google AdSense settings
          </DialogDescription>
        </DialogHeader>

        {!isAuthenticated ? (
          <div className="space-y-4 py-4">
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg">
              <Lock className="h-12 w-12 text-gray-400" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Admin Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
              />
            </div>
            {error && (
              <div className="flex items-center gap-2 text-red-600 text-sm">
                <AlertCircle className="h-4 w-4" />
                {error}
              </div>
            )}
            <Button onClick={handleLogin} className="w-full">
              Login
            </Button>
          </div>
        ) : (
          <div className="space-y-6 py-4">
            {saveSuccess && (
              <div className="flex items-center gap-2 text-green-600 text-sm bg-green-50 p-3 rounded-lg">
                <CheckCircle className="h-4 w-4" />
                Settings saved successfully!
              </div>
            )}

            {/* Main Toggles */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">General Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Enable AdSense</Label>
                    <p className="text-xs text-gray-500">Turn on/off all ads</p>
                  </div>
                  <Switch
                    checked={settings.enabled}
                    onCheckedChange={(checked) => updateSetting('enabled', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Auto Ads</Label>
                    <p className="text-xs text-gray-500">Enable Google Auto Ads</p>
                  </div>
                  <Switch
                    checked={settings.autoAds}
                    onCheckedChange={(checked) => updateSetting('autoAds', checked)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Publisher ID</Label>
                  <Input
                    placeholder="ca-pub-XXXXXXXXXXXXXXXX"
                    value={settings.publisherId}
                    onChange={(e) => updateSetting('publisherId', e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Ad Placements */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Ad Placements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Header Ad Code</Label>
                  <Textarea
                    placeholder="Paste your header ad code here..."
                    rows={3}
                    value={settings.headerAdCode}
                    onChange={(e) => updateSetting('headerAdCode', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Sidebar Ad Code</Label>
                  <Textarea
                    placeholder="Paste your sidebar ad code here..."
                    rows={3}
                    value={settings.sidebarAdCode}
                    onChange={(e) => updateSetting('sidebarAdCode', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Content Ad Code</Label>
                  <Textarea
                    placeholder="Paste your content ad code here..."
                    rows={3}
                    value={settings.contentAdCode}
                    onChange={(e) => updateSetting('contentAdCode', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Footer Ad Code</Label>
                  <Textarea
                    placeholder="Paste your footer ad code here..."
                    rows={3}
                    value={settings.footerAdCode}
                    onChange={(e) => updateSetting('footerAdCode', e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> Settings are stored in your browser&apos localStorage. 
                They will persist on this device but won&apos sync across devices.
              </p>
            </div>

            <div className="flex gap-4">
              <Button onClick={handleSave} disabled={isLoading} className="flex-1">
                {isLoading ? 'Saving...' : 'Save Settings'}
              </Button>
              <Button variant="outline" onClick={handleClose}>
                Close
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

// Export helper function to get settings (for use in other components)
export function getAdSenseSettings(): AdSenseSettings {
  if (typeof window === 'undefined') return DEFAULT_SETTINGS;
  
  const savedSettings = localStorage.getItem(STORAGE_KEY);
  if (savedSettings) {
    try {
    return JSON.parse(savedSettings);
  } catch {
    return DEFAULT_SETTINGS;
  }
  }
  return DEFAULT_SETTINGS;
}


